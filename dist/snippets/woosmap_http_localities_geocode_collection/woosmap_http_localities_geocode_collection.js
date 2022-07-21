// [START woosmap_http_localities_geocode_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/geocode?address=Place%20Jeanne-d\'Arc&components=country%3AFR&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_geocode_collection]