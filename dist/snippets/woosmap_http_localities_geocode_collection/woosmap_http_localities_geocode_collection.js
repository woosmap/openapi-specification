// [START woosmap_http_localities_geocode_collection]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/localities/geocode?address=Place%20Jeanne-d'Arc&components=country%3AFR&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_localities_geocode_collection]