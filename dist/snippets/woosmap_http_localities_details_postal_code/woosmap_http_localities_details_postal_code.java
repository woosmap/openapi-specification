// [START woosmap_http_localities_details_postal_code]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/localities/details?public_id=QaCU%2BfBtigK65ztSrqHqUoUDwZw%3D&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_localities_details_postal_code]