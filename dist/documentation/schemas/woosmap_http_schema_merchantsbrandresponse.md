<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_merchantsbrandresponse] -->
<h3 class="schema-object" id="MerchantsBrandResponse">MerchantsBrandResponse</h3>

Attributes describing a Merchant Brand response

| Field                                                                                                             | Required | Type                                                                           | Description                                                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsBrandResponse-merchants" class="add-link schema-object-property-key"><code>merchants</code></h4> | optional | Array&lt;[MerchantsBrandClean](#MerchantsBrandClean "MerchantsBrandClean")&gt; | <div class="ref-property-description"><p>The list of cleaned transactions</p><p>See <a href="#MerchantsBrandClean">MerchantsBrandClean</a> for more information.</div> |

<h4 class="schema-object-example" id="MerchantsBrandResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "clean_name": "McDonald's",
      "status": "OK",
      "logo": "956bcb3591a8976ff94871a59b09eecc",
      "logo_url": "https://api.woosmap.com/merchants/logos/956bcb3591a8976ff94871a59b09eecc.png",
      "country": "GB"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "clean_name": "Zara",
      "status": "OK",
      "logo": "72fc39033e0d9e923a0236cb874c9309",
      "logo_url": "https://api.woosmap.com/merchants/logos/72fc39033e0d9e923a0236cb874c9309.png",
      "country": "IT"
    },
    {
      "status": "OK",
      "clean_name": "Apollo Pharmacy",
      "logo": "c776d3336e0d8c2b9e893e9e92b2caf7",
      "logo_url": "https://api.woosmap.com/merchants/logos/c776d3336e0d8c2b9e893e9e92b2caf7.png",
      "country": "IN",
      "dirty_name": "APOLLO PHARMACY BANGALORE IN"
    },
    {
      "dirty_name": "PIZZA HUT - SHOP 157",
      "clean_name": "Pizza Hut",
      "status": "OK",
      "logo": "d5463410f32a5f497459ac79552d3ce3",
      "logo_url": "https://api.woosmap.com/merchants/logos/d5463410f32a5f497459ac79552d3ce3.png",
      "country": ""
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "clean_name": "Carrefour City",
      "status": "OK",
      "logo": "08ee8a3cecbcd3b7d9103bcf0e04db7e",
      "logo_url": "https://api.woosmap.com/merchants/logos/08ee8a3cecbcd3b7d9103bcf0e04db7e.png",
      "country": "FR"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "clean_name": "Apple",
      "status": "OK",
      "logo": "5eb75a5239b76287f44021f8e6e1bd41",
      "logo_url": "https://api.woosmap.com/merchants/logos/5eb75a5239b76287f44021f8e6e1bd41.png",
      "country": "IE"
    },
    {
      "status": "NOT_FOUND",
      "clean_name": "",
      "logo": "",
      "logo_url": "",
      "country": "ES",
      "dirty_name": "Pepa SL Gracia"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/MerchantsBrandResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - MerchantsBrandResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_merchantsbrandresponse] -->
