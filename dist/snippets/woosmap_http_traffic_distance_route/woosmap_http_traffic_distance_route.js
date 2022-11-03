// [START woosmap_http_traffic_distance_route]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/traffic/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&routing=shortest&language=en&alternatives=true&departure_time=now&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_traffic_distance_route]