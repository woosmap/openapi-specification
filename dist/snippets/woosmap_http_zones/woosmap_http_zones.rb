# [START woosmap_http_zones]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/zones/ZoneA/?private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_zones]