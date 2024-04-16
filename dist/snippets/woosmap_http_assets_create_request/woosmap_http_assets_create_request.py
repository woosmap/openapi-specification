# [START woosmap_http_assets_create_request]
import requests
import json

url = "https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY"

payload = json.dumps({
    "stores": [
        {
            "types": [
                "drive",
                "click_and_collect"
            ],
            "tags": [
                "wifi",
                "covered_parking"
            ],
            "location": {
                "lat": 38.719,
                "lng": -77.1067
            },
            "storeId": "STORE_ID_123456",
            "name": "My Cool Store",
            "address": {
                "lines": [
                    "Building Centre",
                    "26 Store Street"
                ],
                "countryCode": "UK",
                "city": "London",
                "zipcode": "WC1E 7BT"
            },
            "contact": {
                "website": "https://www.woosmap.com",
                "phone": "+44 20 7693 4000",
                "email": "contact@woosmap.com"
            },
            "userProperties": {
                "some_user_properties": "associated user value"
            },
            "openingHours": {
                "timezone": "Europe/London",
                "usual": {
                    "1": [],
                    "default": [
                        {
                            "start": "08:30",
                            "end": "22:00"
                        }
                    ]
                },
                "special": {
                    "2015-02-07": [
                        {
                            "start": "08:00",
                            "end": "23:00"
                        }
                    ]
                }
            }
        },
        {
            "types": [
                "drive"
            ],
            "tags": [
                "covered_parking"
            ],
            "location": {
                "lat": 38.5239,
                "lng": -77.0157
            },
            "storeId": "STORE_ID_45678",
            "name": "My Cool Store 2",
            "address": {
                "lines": [
                    "1805-1899",
                    "Orchard St"
                ],
                "countryCode": "US",
                "city": "Alexandria",
                "zipcode": "22309"
            },
            "contact": {
                "website": "https://www.woosmap.com",
                "phone": "+44 20 7693 4000",
                "email": "contact@woosmap.com"
            },
            "userProperties": {
                "some_user_properties": "associated user value"
            },
            "openingHours": {
                "timezone": "America/New_York",
                "usual": {
                    "1": [],
                    "default": [
                        {
                            "start": "08:30",
                            "end": "22:00"
                        }
                    ]
                }
            }
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END woosmap_http_assets_create_request]