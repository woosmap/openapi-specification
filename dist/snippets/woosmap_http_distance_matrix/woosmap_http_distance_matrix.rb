# [START woosmap_http_distance_matrix]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/distance/distancematrix/json?origins=48.709%2C2.403&destinations=48.709%2C2.303%7C48.768%2C2.338&mode=driving&language=en&elements=duration_distance&method=distance&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_distance_matrix]