// [START woosmap_http_merchants_brand]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/merchants/brand?dirty_name=APPLE.COM%252FBILL&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_merchants_brand]