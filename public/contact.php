<?php
/**
 * Contact form endpoint for IONOS (Apache + PHP mail).
 * Expects POST fields: name, phone, email, message, optional pickup/destination, honeypot _gotcha.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Allow: POST, OPTIONS');
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
  exit;
}

function field(string $key): string
{
  $value = $_POST[$key] ?? '';
  if (!is_string($value)) {
    return '';
  }
  return trim($value);
}

function clean_header(string $value): string
{
  return str_replace(["\r", "\n", "%0a", "%0d"], '', $value);
}

// Honeypot: pretend success so bots leave quietly
if (field('_gotcha') !== '') {
  echo json_encode(['success' => true]);
  exit;
}

$name = field('name');
$phone = field('phone');
$email = field('email');
$message = field('message');
$pickup = field('pickup');
$destination = field('destination');

$errors = [];
if ($name === '' || mb_strlen($name) > 120) {
  $errors[] = 'Please enter your name.';
}
if ($phone === '' || mb_strlen($phone) > 40) {
  $errors[] = 'Please enter a phone number.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 160) {
  $errors[] = 'Please enter a valid email address.';
}
if ($message === '' || mb_strlen($message) > 5000) {
  $errors[] = 'Please enter a message.';
}
if (mb_strlen($pickup) > 200 || mb_strlen($destination) > 200) {
  $errors[] = 'Pickup or destination is too long.';
}

if ($errors) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => $errors[0]]);
  exit;
}

$to = 'info@leopardtaxis.co.uk';
$subject = 'New enquiry from Leopard Taxis website';

$bodyLines = [
  'New website enquiry',
  '',
  'Name: ' . $name,
  'Phone: ' . $phone,
  'Email: ' . $email,
];
if ($pickup !== '') {
  $bodyLines[] = 'Pickup: ' . $pickup;
}
if ($destination !== '') {
  $bodyLines[] = 'Destination: ' . $destination;
}
$bodyLines[] = '';
$bodyLines[] = 'Message:';
$bodyLines[] = $message;
$bodyLines[] = '';
$bodyLines[] = 'Sent: ' . gmdate('Y-m-d H:i:s') . ' UTC';
$body = implode("\n", $bodyLines);

$from = 'info@leopardtaxis.co.uk';
$replyTo = clean_header($email);
$headers = [
  'From: Leopard Taxis Website <' . $from . '>',
  'Reply-To: ' . clean_header($name) . ' <' . $replyTo . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Could not send the message. Please email info@leopardtaxis.co.uk or try WhatsApp.',
  ]);
  exit;
}

echo json_encode(['success' => true]);
