# [START woosmap_http_merchants_brand]
import requests
import json

url = "https://api.woosmap.com/merchants/brand?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "merchants": [
        {
            "dirty_name": "MCDO UK 2231 EP",
            "country": "GB"
        },
        {
            "dirty_name": "Zara Fashion Retail, S.A.",
            "country": "IT"
        },
        {
            "dirty_name": "APOLLO PHARMACY BANGALORE IN",
            "country": "IN"
        },
        {
            "dirty_name": "PIZZA HUT - SHOP 157"
        },
        {
            "dirty_name": "CARREFOUR CITY 3112846",
            "country": "FR"
        },
        {
            "dirty_name": "ITUNES.COM/BILL",
            "country": "IE"
        },
        {
            "dirty_name": "Pepa SL Gracia",
            "country": "ES"
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_merchants_brand]