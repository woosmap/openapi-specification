# [START woosmap_http_localities_details_address]
import requests

url = "https://api.woosmap.com/localities/details?public_id=MVZWBfGZQnAQn9JtE9CJZjgeB4Q%3D&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_details_address]