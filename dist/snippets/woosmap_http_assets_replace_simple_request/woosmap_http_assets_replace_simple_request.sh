# [START woosmap_http_assets_replace_simple_request]
curl -L -X POST 'https://api.woosmap.com/stores/replace?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "stores": [
    {
      "storeId": "store_123",
      "name": "My first cool store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
}'
# [END woosmap_http_assets_replace_simple_request]