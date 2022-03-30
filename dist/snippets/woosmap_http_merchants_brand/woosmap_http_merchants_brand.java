// [START woosmap_http_merchants_brand]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.woosmap.com/merchants/brand?dirty_name=APPLE.COM%252FBILL&key=YOUR_PUBLIC_API_KEY")
  .method("GET", null)
  .addHeader("Referer", "http://localhost")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_merchants_brand]