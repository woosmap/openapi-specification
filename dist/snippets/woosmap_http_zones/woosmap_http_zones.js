// [START woosmap_http_zones]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/zones/ZoneA/?private_key=YOUR_PRIVATE_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_zones]