// [START woosmap_http_merchants_place]
var axios = require('axios');
var data = JSON.stringify({
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB",
      "merchant_id": "234482729011"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT",
      "merchant_id": "*44532UY2T33219"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR",
      "merchant_id": "9651781125"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE",
      "merchant_id": "2070070200925"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES",
      "merchant_id": "34J21189"
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api.woosmap.com/merchants/place?private_key=YOUR_PRIVATE_API_KEY',
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

// [END woosmap_http_merchants_place]