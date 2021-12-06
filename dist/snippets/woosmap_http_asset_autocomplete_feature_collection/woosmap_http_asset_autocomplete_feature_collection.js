// [START woosmap_http_asset_autocomplete_feature_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/stores/autocomplete/?key=woos-48c80350-88aa-333e-835a-07f4b658a9a4&lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet',
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