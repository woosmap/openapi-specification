// [START woosmap_http_distance_isochrone]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/distance/isochrone/json?origin=48.709%2C2.403&value=1&mode=driving&language=en&method=distance&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_distance_isochrone]