# [START woosmap_http_geolocation]
import requests

url = "https://api.woosmap.com/geolocation/position?ip_address=75.134.29.90&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_geolocation]