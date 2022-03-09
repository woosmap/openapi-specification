// [START woosmap_http_address_geocode_collection]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/address/geocode/json?address=Place%20de%20la%20Resistance&components=country%3AFR&limit=5&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_address_geocode_collection]