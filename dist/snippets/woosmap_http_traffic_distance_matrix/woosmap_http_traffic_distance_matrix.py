# [START woosmap_http_traffic_distance_matrix]
import requests

url = "https://api.woosmap.com/traffic/distancematrix/json?origins=48.709%2C2.403&destinations=48.709%2C2.303%7C48.768%2C2.338&routing=shortest&language=en&departure_time=now&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_traffic_distance_matrix]