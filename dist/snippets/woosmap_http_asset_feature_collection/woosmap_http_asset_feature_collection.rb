# [START woosmap_http_asset_feature_collection]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&radius=1000&stores_by_page=3&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_asset_feature_collection]