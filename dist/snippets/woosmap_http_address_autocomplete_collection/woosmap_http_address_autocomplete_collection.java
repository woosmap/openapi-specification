// [START woosmap_http_address_autocomplete_collection]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/address/autocomplete/json?input=Lond&components=country%3Agb&key=YOUR_PUBLIC_API_KEY")
  .method("GET", body)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_address_autocomplete_collection]