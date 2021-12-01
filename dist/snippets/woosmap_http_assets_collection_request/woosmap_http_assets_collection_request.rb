# [START woosmap_http_assets_collection_request]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/stores?key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "stores": [
    {
      "types": [
        "drive",
        "click_and_collect"
      ],
      "tags": [
        "wifi",
        "covered_parking"
      ],
      "location": {
        "lat": 42.6251184,
        "lng": 2.4270975
      },
      "storeId": "STORE_ID_123456",
      "name": "My Cool Store",
      "address": {
        "lines": [
          "Building Centre",
          "26 Store Street"
        ],
        "countryCode": "UK",
        "city": "London",
        "zipcode": "WC1E 7BT"
      },
      "contact": {
        "website": "https://www.woosmap.com",
        "phone": "+44 20 7693 4000",
        "email": "contact@woosmap.com"
      },
      "userProperties": {
        "some_user_properties": "associated user value"
      },
      "openingHours": {
        "timezone": "Europe/London",
        "usual": {
          "1": [],
          "default": [
            {
              "start": "08:30",
              "end": "22:00"
            }
          ]
        },
        "special": {
          "2015-02-07": [
            {
              "start": "08:00",
              "end": "23:00"
            }
          ],
          "2015-02-08": []
        }
      }
    }
  ]
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_assets_collection_request]