# [START woosmap_http_asset_feature_collection]
import requests

url = "https://api.woosmap.com/stores/search/?key=woos-48c80350-88aa-333e-835a-07f4b658a9a4&lat=51.50976&lng=-0.145276&radius=1000"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_asset_feature_collection]