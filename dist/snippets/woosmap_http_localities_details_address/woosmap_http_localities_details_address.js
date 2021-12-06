// [START woosmap_http_localities_details_address]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/details?public_id=MVZWBfGZQnAQn9JtE9CJZjgeB4Q%3D&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_details_address]