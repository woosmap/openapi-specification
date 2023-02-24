# [START woosmap_http_assets_create_simple_request]
curl -L -X POST 'https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "stores": [
    {
      "store_id": "store_123",
      "name": "My first cool store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
}'
# [END woosmap_http_assets_create_simple_request]