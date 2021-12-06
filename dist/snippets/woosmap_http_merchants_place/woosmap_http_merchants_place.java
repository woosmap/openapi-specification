// [START woosmap_http_merchants_place]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"merchants\": [\n    {\n      \"dirty_name\": \"MCDO UK 2231 EP\",\n      \"country\": \"GB\",\n      \"merchant_id\": \"234482729011\"\n    },\n    {\n      \"dirty_name\": \"Zara Fashion Retail, S.A.\",\n      \"country\": \"IT\",\n      \"merchant_id\": \"*44532UY2T33219\"\n    },\n    {\n      \"dirty_name\": \"CARREFOUR CITY 3112846\",\n      \"country\": \"FR\",\n      \"merchant_id\": \"9651781125\"\n    },\n    {\n      \"dirty_name\": \"ITUNES.COM/BILL\",\n      \"country\": \"IE\",\n      \"merchant_id\": \"2070070200925\"\n    },\n    {\n      \"dirty_name\": \"Pepa SL Gracia\",\n      \"country\": \"ES\",\n      \"merchant_id\": \"34J21189\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/merchants/place?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_merchants_place]