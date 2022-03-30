// [START woosmap_http_zones]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/zones/ZoneA/?private_key=YOUR_PRIVATE_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_zones]