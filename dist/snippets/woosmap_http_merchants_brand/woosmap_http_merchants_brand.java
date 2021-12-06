// [START woosmap_http_merchants_brand]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"merchants\": [\n    {\n      \"dirty_name\": \"MCDO UK 2231 EP\",\n      \"country\": \"GB\"\n    },\n    {\n      \"dirty_name\": \"Zara Fashion Retail, S.A.\",\n      \"country\": \"IT\"\n    },\n    {\n      \"dirty_name\": \"APOLLO PHARMACY BANGALORE IN\",\n      \"country\": \"IN\"\n    },\n    {\n      \"dirty_name\": \"PIZZA HUT - SHOP 157\"\n    },\n    {\n      \"dirty_name\": \"CARREFOUR CITY 3112846\",\n      \"country\": \"FR\"\n    },\n    {\n      \"dirty_name\": \"ITUNES.COM/BILL\",\n      \"country\": \"IE\"\n    },\n    {\n      \"dirty_name\": \"Pepa SL Gracia\",\n      \"country\": \"ES\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/merchants/brand?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_merchants_brand]