// [START woosmap_http_distance_route]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/distance/route/json?origin=49.31067%2C4.14525&destination=49.31344%2C4.15293&mode=driving&language=en&alternatives=true&method=distance&details=full&key=YOUR_PUBLIC_API_KEY")
  .method("GET", body)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_distance_route]