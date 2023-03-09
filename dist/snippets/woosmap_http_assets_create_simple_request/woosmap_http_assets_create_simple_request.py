# [START woosmap_http_assets_create_simple_request]
import requests
import json

url = "https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "stores": [
        {
            "storeId": "store_123",
            "name": "My first cool store",
            "location": {
                "lat": 43.61,
                "lng": 3.88
            }
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_assets_create_simple_request]