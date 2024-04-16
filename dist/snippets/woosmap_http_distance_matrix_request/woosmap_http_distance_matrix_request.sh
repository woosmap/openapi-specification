# [START woosmap_http_distance_matrix_request]
curl -L -X POST 'https://api.woosmap.com/distance/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "elements": "duration_distance",
  "method": "distance",
  "departure_time": "now"
}'
# [END woosmap_http_distance_matrix_request]