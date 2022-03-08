# [START woosmap_http_merchants_brand]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/merchants/brand?dirty_name=APPLE.COM%252FBILL&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_merchants_brand]