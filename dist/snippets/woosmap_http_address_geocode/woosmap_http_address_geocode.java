// [START woosmap_http_address_geocode]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/address/geocode/json?latlng=0.689247%2C-74.044502&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_address_geocode]