// [START woosmap_http_localities_autocomplete_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/autocomplete/?input=Lond&components=country%3Agb&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_autocomplete_collection]