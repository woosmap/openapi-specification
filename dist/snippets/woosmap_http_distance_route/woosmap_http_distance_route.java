// [START woosmap_http_distance_route]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/distance/route/json?origin=48.709%2C2.403&destination=48.709%2C2.303&mode=driving&language=en&alternatives=true&waypoints=48.850077%2C3.311124%7C48.850077%2C3.411124&method=distance&key=YOUR_PUBLIC_API_KEY")
  .method("GET", body)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_distance_route]