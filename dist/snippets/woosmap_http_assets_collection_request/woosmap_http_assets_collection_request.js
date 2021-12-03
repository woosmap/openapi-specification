// [START woosmap_http_assets_collection_request]
var axios = require('axios');
var data = JSON.stringify({
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
        "lat": 42.6251184,
        "lng": 2.4270975
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
          ],
          "2015-02-08": []
        }
      }
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY',
  headers: { 
    'content-type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_assets_collection_request]