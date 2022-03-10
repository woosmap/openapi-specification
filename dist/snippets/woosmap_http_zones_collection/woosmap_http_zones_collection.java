// [START woosmap_http_zones_collection]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY&limit=2&offset=1")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_zones_collection]