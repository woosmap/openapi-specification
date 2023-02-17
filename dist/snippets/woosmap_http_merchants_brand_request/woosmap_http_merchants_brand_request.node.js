// [START woosmap_http_merchants_brand_request]
var axios = require('axios');
var data = JSON.stringify({
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
});

var config = {
  method: 'post',
  url: 'https://api.woosmap.com/merchants/brand?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_merchants_brand_request]