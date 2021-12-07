// [START woosmap_http_zones_delete_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/zones/?private_key=YOUR_PRIVATE_API_KEY")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_zones_delete_request]