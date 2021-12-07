// [START woosmap_http_asset_autocomplete_feature_collection]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/stores/autocomplete/?lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_asset_autocomplete_feature_collection]