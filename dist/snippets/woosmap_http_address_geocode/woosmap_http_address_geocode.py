# [START woosmap_http_address_geocode]
import requests

url = "https://api.woosmap.com/address/geocode/json?latlng=0.689247%2C-74.044502&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_address_geocode]