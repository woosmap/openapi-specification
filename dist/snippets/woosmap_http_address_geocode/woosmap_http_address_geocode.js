// [START woosmap_http_address_geocode]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/address/geocode/json?latlng=0.689247%2C-74.044502&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_address_geocode]