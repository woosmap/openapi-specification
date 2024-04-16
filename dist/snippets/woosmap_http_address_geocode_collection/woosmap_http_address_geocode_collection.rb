# [START woosmap_http_address_geocode_collection]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance%20Paris&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_address_geocode_collection]