// [START woosmap_http_distance_route]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/distance/route/json?origins=48.709%2C2.403&destinations=48.709%2C2.303%7C48.768%2C2.338&mode=driving&language=en&alternatives=true&waypoints=48.850077%2C3.311124%7C48.850077%2C3.411124&method=distance&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_distance_route]