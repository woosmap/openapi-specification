# [START woosmap_http_merchants_place]
require "uri"
require "json"
require "net/http"

url = URI("https://api.woosmap.com/merchants/place?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB",
      "merchant_id": "234482729011"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT",
      "merchant_id": "*44532UY2T33219"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR",
      "merchant_id": "9651781125"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE",
      "merchant_id": "2070070200925"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES",
      "merchant_id": "34J21189"
    }
  ]
})

response = https.request(request)
puts response.read_body

# [END woosmap_http_merchants_place]