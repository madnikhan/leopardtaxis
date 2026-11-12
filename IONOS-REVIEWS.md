# Live Google reviews (IONOS)

The footer loads reviews from `/reviews.php`, which calls the Google Places API on the server (API key never goes in the React bundle).

## One-time setup

1. In [Google Cloud Console](https://console.cloud.google.com/), enable **Places API**.
2. Create an API key. Restrict by HTTP referrer to:
   - `https://leopardtaxis.co.uk/*`
   - `https://www.leopardtaxis.co.uk/*` (if used)
3. Find the business **Place ID** with the [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder) (search “Leopard Taxis” + town).
4. On the server, next to `reviews.php`, create `reviews.config.php` from `reviews.config.example.php`:

```php
<?php
return [
  'api_key' => 'AIza…',
  'place_id' => 'ChIJ…',
  'cache_ttl' => 43200,
];
```

5. Upload the latest `dist/` (must include `reviews.php`). Ensure `reviews.config.php` is on the host and **not** world-writable beyond what’s needed.
6. Visit `https://leopardtaxis.co.uk/reviews.php` — you should see JSON with `success: true`, `rating`, `total`, and `reviews`.
7. Soft-refresh the site; the footer should show the live score/count and a reviews marquee.

## Notes

- Google returns **up to 5** reviews per Place Details request, plus the live rating and total count (e.g. 31).
- Responses are cached under `cache/google-reviews.json` for ~12 hours to limit quota use.
