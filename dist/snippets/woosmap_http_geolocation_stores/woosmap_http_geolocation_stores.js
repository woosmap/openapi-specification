// [START woosmap_http_geolocation_stores]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/geolocation/stores?private_key=YOUR_PRIVATE_API_KEY&ip_address=173.79.254.254',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_geolocation_stores]