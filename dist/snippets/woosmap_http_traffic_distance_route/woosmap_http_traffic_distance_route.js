// [START woosmap_http_traffic_distance_route]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/traffic/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&routing=shortest&language=en&alternatives=true&departure_time=now&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_traffic_distance_route]