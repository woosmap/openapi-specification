// [START woosmap_http_asset_autocomplete_feature_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/stores/autocomplete/?language=en&query=localized%3Astreet&limit=3&key=YOUR_PUBLIC_API_KEY',
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