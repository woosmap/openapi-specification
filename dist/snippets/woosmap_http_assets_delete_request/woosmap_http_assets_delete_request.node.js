// [START woosmap_http_assets_delete_request]
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://api.woosmap.com/stores/?private_key=YOUR_PRIVATE_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_assets_delete_request]