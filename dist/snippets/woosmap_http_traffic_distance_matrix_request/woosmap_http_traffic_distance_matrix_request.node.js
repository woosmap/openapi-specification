// [START woosmap_http_traffic_distance_matrix_request]
var axios = require('axios');
var data = JSON.stringify({
  "origins": "48.73534,2.368308|48.73534,2.368308",
  "destinations": "48.83534,2.368308",
  "units": "imperial",
  "routing": "fastest",
  "departure_time": "now"
});

var config = {
  method: 'post',
  url: 'https://api.woosmap.com/traffic/distancematrix/json?private_key=YOUR_PRIVATE_API_KEY',
  headers: { 
    'content-type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END woosmap_http_traffic_distance_matrix_request]