# [START woosmap_http_merchants_brand_request]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/merchants/brand?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
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
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_merchants_brand_request]