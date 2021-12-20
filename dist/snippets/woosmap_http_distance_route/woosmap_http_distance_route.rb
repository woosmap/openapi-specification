# [START woosmap_http_distance_route]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/distance/route/json?origin=48.709%2C2.403&destination=48.709%2C2.303&mode=driving&language=en&alternatives=true&waypoints=48.850077%2C3.311124%7C48.850077%2C3.411124&method=distance&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_distance_route]