// [START woosmap_http_geolocation_stores]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/geolocation/stores?private_key=YOUR_PRIVATE_API_KEY&ip_address=173.79.254.254")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_geolocation_stores]