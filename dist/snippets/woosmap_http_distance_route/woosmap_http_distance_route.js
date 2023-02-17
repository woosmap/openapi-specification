// [START woosmap_http_distance_route]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/distance/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&mode=driving&language=en&alternatives=true&method=distance&details=full&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_distance_route]