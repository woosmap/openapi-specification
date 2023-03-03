// [START woosmap_http_assets_replace_simple_request]
var axios = require('axios');
var data = JSON.stringify({
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
});

var config = {
  method: 'post',
  url: 'https://api.woosmap.com/stores/replace?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_assets_replace_simple_request]