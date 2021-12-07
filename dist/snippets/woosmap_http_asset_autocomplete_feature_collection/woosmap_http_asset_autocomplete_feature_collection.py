# [START woosmap_http_asset_autocomplete_feature_collection]
import requests

url = "https://api.woosmap.com/stores/autocomplete/?lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_autocomplete_feature_collection]