# [START woosmap_http_assets_replace_simple_request]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/stores/replace?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
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
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_assets_replace_simple_request]