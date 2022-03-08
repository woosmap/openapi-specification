# [START woosmap_http_merchants_brand_request]
curl -L -X POST 'https://api.woosmap.com/merchants/brand?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT"
    },
    {
      "dirty_name": "APOLLO PHARMACY BANGALORE IN",
      "country": "IN"
    },
    {
      "dirty_name": "PIZZA HUT - SHOP 157"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES"
    }
  ]
}'
# [END woosmap_http_merchants_brand_request]