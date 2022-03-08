# [START woosmap_http_localities_details_address]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/localities/details?public_id=RHV4S2czL2k1dDFBdVN0MXF2d2FpU2dkK2dJPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ%3D%3D&key=YOUR_PUBLIC_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Referer"] = "http://localhost"

response = https.request(request)
puts response.read_body

# [END woosmap_http_localities_details_address]