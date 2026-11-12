<?php
/**
 * Live Google reviews proxy for IONOS.
 * Reads Place Details via Places API; caches JSON on disk.
 * Config: reviews.config.php next to this file (see reviews.config.example.php).
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: public, max-age=300');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Allow: GET, OPTIONS');
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
  exit;
}

$configPath = __DIR__ . '/reviews.config.php';
if (!is_readable($configPath)) {
  http_response_code(503);
  echo json_encode([
    'success' => false,
    'message' => 'Reviews not configured. Add reviews.config.php on the server.',
  ]);
  exit;
}

$config = require $configPath;
$apiKey = isset($config['api_key']) ? trim((string) $config['api_key']) : '';
$placeId = isset($config['place_id']) ? trim((string) $config['place_id']) : '';
$cacheTtl = isset($config['cache_ttl']) ? (int) $config['cache_ttl'] : 43200;

if ($apiKey === '' || $apiKey === 'YOUR_GOOGLE_PLACES_API_KEY' || $placeId === '' || $placeId === 'YOUR_GOOGLE_PLACE_ID') {
  http_response_code(503);
  echo json_encode([
    'success' => false,
    'message' => 'Set a real Places API key and Place ID in reviews.config.php.',
  ]);
  exit;
}

$cacheDir = __DIR__ . '/cache';
$cacheFile = $cacheDir . '/google-reviews.json';

if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < max(300, $cacheTtl)) {
  readfile($cacheFile);
  exit;
}

$url = 'https://maps.googleapis.com/maps/api/place/details/json?' . http_build_query([
  'place_id' => $placeId,
  'fields' => 'name,rating,user_ratings_total,reviews',
  'reviews_sort' => 'newest',
  'key' => $apiKey,
]);

$context = stream_context_create([
  'http' => [
    'method' => 'GET',
    'timeout' => 12,
    'header' => "Accept: application/json\r\n",
  ],
]);

$raw = @file_get_contents($url, false, $context);
if ($raw === false) {
  if (is_readable($cacheFile)) {
    readfile($cacheFile);
    exit;
  }
  http_response_code(502);
  echo json_encode(['success' => false, 'message' => 'Could not reach Google Places API.']);
  exit;
}

$data = json_decode($raw, true);
if (!is_array($data) || ($data['status'] ?? '') !== 'OK' || !isset($data['result'])) {
  if (is_readable($cacheFile)) {
    readfile($cacheFile);
    exit;
  }
  $status = is_array($data) ? ($data['status'] ?? 'UNKNOWN') : 'PARSE_ERROR';
  http_response_code(502);
  echo json_encode([
    'success' => false,
    'message' => 'Places API error: ' . $status,
  ]);
  exit;
}

$result = $data['result'];
$reviewsOut = [];
if (!empty($result['reviews']) && is_array($result['reviews'])) {
  foreach ($result['reviews'] as $review) {
    if (!is_array($review)) {
      continue;
    }
    $reviewsOut[] = [
      'author' => (string) ($review['author_name'] ?? 'Google user'),
      'rating' => (int) ($review['rating'] ?? 5),
      'text' => (string) ($review['text'] ?? ''),
      'relativeTime' => (string) ($review['relative_time_description'] ?? ''),
    ];
  }
}

$payload = [
  'success' => true,
  'rating' => isset($result['rating']) ? (float) $result['rating'] : null,
  'total' => isset($result['user_ratings_total']) ? (int) $result['user_ratings_total'] : null,
  'name' => (string) ($result['name'] ?? 'Leopard Taxis'),
  'reviews' => $reviewsOut,
];

$json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if (!is_dir($cacheDir)) {
  @mkdir($cacheDir, 0755, true);
}
if (is_dir($cacheDir) && is_writable($cacheDir)) {
  @file_put_contents($cacheFile, $json);
}

echo $json;
