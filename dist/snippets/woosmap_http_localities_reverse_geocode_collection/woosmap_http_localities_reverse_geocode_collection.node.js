// [START woosmap_http_localities_reverse_geocode_collection]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/geocode?latlng=51.52089223979333%2C-0.195460973340401&list_sub_buildings=true&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_reverse_geocode_collection]