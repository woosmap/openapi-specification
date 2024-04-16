// [START woosmap_http_zones_collection]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY&limit=2&offset=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_zones_collection]