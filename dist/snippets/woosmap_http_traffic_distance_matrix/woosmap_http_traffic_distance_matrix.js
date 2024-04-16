// [START woosmap_http_traffic_distance_matrix]
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.woosmap.com/traffic/distancematrix/json?origins=48.709%2C2.403&destinations=48.709%2C2.303%7C48.768%2C2.338&routing=shortest&language=en&departure_time=now&key=YOUR_PUBLIC_API_KEY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// [END woosmap_http_traffic_distance_matrix]