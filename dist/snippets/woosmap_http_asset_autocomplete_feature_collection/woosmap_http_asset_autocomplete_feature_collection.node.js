// [START woosmap_http_asset_autocomplete_feature_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/stores/autocomplete/?lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet&stores_by_page=3&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_asset_autocomplete_feature_collection]