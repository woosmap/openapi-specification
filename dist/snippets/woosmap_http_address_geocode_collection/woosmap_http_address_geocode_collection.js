// [START woosmap_http_address_geocode_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY',
  headers: { 
    'Referer': 'http://localhost'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_address_geocode_collection]