# [START woosmap_http_traffic_distance_matrix_request]
curl -L -X POST 'https://api.woosmap.com/traffic/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "routing": "fastest",
  "departure_time": "now"
}'
# [END woosmap_http_traffic_distance_matrix_request]