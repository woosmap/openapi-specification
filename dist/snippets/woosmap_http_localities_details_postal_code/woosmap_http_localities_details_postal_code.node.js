// [START woosmap_http_localities_details_postal_code]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.woosmap.com/localities/details?public_id=QaCU%2BfBtigK65ztSrqHqUoUDwZw%3D&key=YOUR_PUBLIC_API_KEY',
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

// [END woosmap_http_localities_details_postal_code]