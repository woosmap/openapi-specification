# [START woosmap_http_assets_delete_by_id_request]
require "uri"
require "net/http"

url = URI("https://api.woosmap.com/stores/?query=idstore%3A%3Dstore_123&private_key=YOUR_PRIVATE_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Delete.new(url)

response = https.request(request)
puts response.read_body

# [END woosmap_http_assets_delete_by_id_request]