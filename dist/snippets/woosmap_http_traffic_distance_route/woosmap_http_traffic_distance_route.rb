# [START woosmap_http_traffic_distance_route]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/traffic/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&routing=shortest&language=en&alternatives=true&departure_time=now&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_traffic_distance_route]