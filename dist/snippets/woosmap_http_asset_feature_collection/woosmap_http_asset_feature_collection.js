// [START woosmap_http_asset_feature_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/stores/search/?lat=51.50976&lng=-0.145276&radius=1000&stores_by_page=3&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_asset_feature_collection]