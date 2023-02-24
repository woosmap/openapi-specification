// [START woosmap_http_assets_delete_by_id_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/stores/?query=idstore%3Astore_123&private_key=YOUR_PRIVATE_API_KEY")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_assets_delete_by_id_request]