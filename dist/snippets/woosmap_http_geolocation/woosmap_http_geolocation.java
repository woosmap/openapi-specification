// [START woosmap_http_geolocation]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/geolocation/position?ip_address=163.172.70.225&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_geolocation]