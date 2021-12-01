# [START woosmap_http_geolocation]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/geolocation/position?ip_address=75.134.29.90&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END woosmap_http_geolocation]