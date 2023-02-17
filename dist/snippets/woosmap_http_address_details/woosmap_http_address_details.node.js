// [START woosmap_http_address_details]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/address/details/json?public_id=aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_address_details]