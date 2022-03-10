// [START woosmap_http_zones_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY&limit=2&offset=1',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_zones_collection]