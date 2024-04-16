# [START woosmap_http_traffic_distance_matrix_request]
import requests
import json

url = "https://api.woosmap.com/traffic/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "origins": "48.73534,2.368308|48.73534,2.368308",
    "destinations": "48.83534,2.368308",
    "units": "imperial",
    "routing": "fastest",
    "departure_time": "now"
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_traffic_distance_matrix_request]