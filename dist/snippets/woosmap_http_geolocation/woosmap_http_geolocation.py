# [START woosmap_http_geolocation]
import requests

url = "https://api.woosmap.com/geolocation/position?ip_address=163.172.70.225&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_geolocation]