// [START woosmap_http_localities_nearby_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/nearby?types=point_of_interest&location=40.71399%2C-74.00499&categories=business&page=3&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_nearby_collection]