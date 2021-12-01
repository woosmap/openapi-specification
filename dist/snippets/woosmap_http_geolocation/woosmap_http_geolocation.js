// [START woosmap_http_geolocation]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/geolocation/position?ip_address=75.134.29.90&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_geolocation]