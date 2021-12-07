// [START woosmap_http_assets_replace_request]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"stores\": [\n    {\n      \"types\": [\n        \"drive\",\n        \"click_and_collect\"\n      ],\n      \"tags\": [\n        \"wifi\",\n        \"covered_parking\"\n      ],\n      \"location\": {\n        \"lat\": 38.719,\n        \"lng\": -77.1067\n      },\n      \"storeId\": \"STORE_ID_123456\",\n      \"name\": \"My Cool Store\",\n      \"address\": {\n        \"lines\": [\n          \"Building Centre\",\n          \"26 Store Street\"\n        ],\n        \"countryCode\": \"UK\",\n        \"city\": \"London\",\n        \"zipcode\": \"WC1E 7BT\"\n      },\n      \"contact\": {\n        \"website\": \"https://www.woosmap.com\",\n        \"phone\": \"+44 20 7693 4000\",\n        \"email\": \"contact@woosmap.com\"\n      },\n      \"userProperties\": {\n        \"some_user_properties\": \"associated user value\"\n      },\n      \"openingHours\": {\n        \"timezone\": \"Europe/London\",\n        \"usual\": {\n          \"1\": [],\n          \"default\": [\n            {\n              \"start\": \"08:30\",\n              \"end\": \"22:00\"\n            }\n          ]\n        },\n        \"special\": {\n          \"2015-02-07\": [\n            {\n              \"start\": \"08:00\",\n              \"end\": \"23:00\"\n            }\n          ]\n        }\n      }\n    },\n    {\n      \"types\": [\n        \"drive\"\n      ],\n      \"tags\": [\n        \"covered_parking\"\n      ],\n      \"location\": {\n        \"lat\": 38.5239,\n        \"lng\": -77.0157\n      },\n      \"storeId\": \"STORE_ID_45678\",\n      \"name\": \"My Cool Store 2\",\n      \"address\": {\n        \"lines\": [\n          \"1805-1899\",\n          \"Orchard St\"\n        ],\n        \"countryCode\": \"US\",\n        \"city\": \"Alexandria\",\n        \"zipcode\": \"22309\"\n      },\n      \"contact\": {\n        \"website\": \"https://www.woosmap.com\",\n        \"phone\": \"+44 20 7693 4000\",\n        \"email\": \"contact@woosmap.com\"\n      },\n      \"userProperties\": {\n        \"some_user_properties\": \"associated user value\"\n      },\n      \"openingHours\": {\n        \"timezone\": \"America/New_York\",\n        \"usual\": {\n          \"1\": [],\n          \"default\": [\n            {\n              \"start\": \"08:30\",\n              \"end\": \"22:00\"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://api.woosmap.com/stores/replace?private_key=YOUR_PRIVATE_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END woosmap_http_assets_replace_request]