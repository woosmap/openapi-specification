# [START woosmap_http_localities_details_address]
import requests

url = "https://api.woosmap.com/localities/details?public_id=RHV4S2czL2k1dDFBdVN0MXF2d2FpU2dkK2dJPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ%3D%3D&key=YOUR_PUBLIC_API_KEY"

payload={}
headers = {
    'Referer': 'http://localhost'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_localities_details_address]