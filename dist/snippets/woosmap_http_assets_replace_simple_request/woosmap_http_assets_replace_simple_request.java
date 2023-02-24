// [START woosmap_http_assets_replace_simple_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"stores\": [\n    {\n      \"store_id\": \"store_123\",\n      \"name\": \"My first cool store\",\n      \"location\": {\n        \"lat\": 43.61,\n        \"lng\": 3.88\n      }\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_assets_replace_simple_request]