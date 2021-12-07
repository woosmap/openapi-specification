// [START woosmap_http_zones_update_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"zones\": [\n    {\n      \"zone_id\": \"ZoneA\",\n      \"description\": \"Delivery Zone for Store A\",\n      \"store_id\": \"STORE_ID_45678\",\n      \"polygon\": \"POLYGON ((-122.496116 37.7648181,-122.4954079 37.751518,-122.4635648 37.7530788,-122.4618481 37.7514501,-122.4601315 37.7521288,-122.4565266 37.7513144,-122.4540375 37.7566755,-122.4528359 37.7583041,-122.4515485 37.7595934,-122.4546384 37.774656,-122.4718903 37.7731635,-122.472577 37.772485,-122.4755811 37.7725529,-122.4791001 37.7723493,-122.4793576 37.7713995,-122.4784993 37.769839,-122.4783276 37.7680071,-122.4774693 37.766718,-122.4772118 37.7652931,-122.496116 37.7648181))\",\n      \"types\": [\n        \"delivery\"\n      ]\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/zones?private_key=YOUR_PRIVATE_API_KEY")
  .method("PUT", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_zones_update_request]