<?php
/**
 * Copy to reviews.config.php on the server (IONOS) and fill in real values.
 * reviews.config.php is gitignored — never commit API keys.
 *
 * Enable "Places API" (or Places API New) in Google Cloud Console.
 * Restrict the key by HTTP referrer to https://leopardtaxis.co.uk/*
 */
return [
  'api_key' => 'YOUR_GOOGLE_PLACES_API_KEY',
  'place_id' => 'YOUR_GOOGLE_PLACE_ID',
  // Cache lifetime in seconds (12 hours)
  'cache_ttl' => 43200,
];
