// [START woosmap_http_geolocation]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/geolocation/position?ip_address=163.172.70.225&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_geolocation]