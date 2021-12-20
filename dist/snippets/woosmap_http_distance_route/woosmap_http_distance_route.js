// [START woosmap_http_distance_route]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/distance/route/json?origin=48.709%2C2.403&destination=48.709%2C2.303&mode=driving&language=en&alternatives=true&waypoints=48.850077%2C3.311124%7C48.850077%2C3.411124&method=distance&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_distance_route]