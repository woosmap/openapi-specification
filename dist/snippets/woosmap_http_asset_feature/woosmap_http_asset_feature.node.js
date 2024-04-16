// [START woosmap_http_asset_feature]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/stores/10031/?key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_asset_feature]