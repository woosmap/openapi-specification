# [START woosmap_http_address_geocode_collection]
curl -L -X GET 'https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY' \
-H 'Referer: http://localhost'
# [END woosmap_http_address_geocode_collection]