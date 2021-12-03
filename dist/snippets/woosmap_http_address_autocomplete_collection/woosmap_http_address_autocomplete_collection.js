// [START woosmap_http_address_autocomplete_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/address/autocomplete/json?input=Lond&component=country%3AGB&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_address_autocomplete_collection]