<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_merchantsbrandrequest] -->
<h3 class="schema-object" id="MerchantsBrandRequest">MerchantsBrandRequest</h3>

Attributes describing a Merchant Brand request

| Field                                                                                                            | Required     | Type                                                                           | Description                                                                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsBrandRequest-merchants" class="add-link schema-object-property-key"><code>merchants</code></h4> | **required** | Array&lt;[MerchantsBrandDirty](#MerchantsBrandDirty "MerchantsBrandDirty")&gt; | <div class="ref-property-description"><p>The list of dirty transactions to clean</p><p>See <a href="#MerchantsBrandDirty">MerchantsBrandDirty</a> for more information.</div> |

<h4 class="schema-object-example" id="MerchantsBrandRequest-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT"
    },
    {
      "dirty_name": "APOLLO PHARMACY BANGALORE IN",
      "country": "IN"
    },
    {
      "dirty_name": "PIZZA HUT - SHOP 157"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandrequest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/MerchantsBrandRequest.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandrequest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - MerchantsBrandRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_merchantsbrandrequest] -->
