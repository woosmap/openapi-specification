<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_merchantsbrandgetresponse] -->
<h3 class="schema-object" id="MerchantsBrandGetResponse">MerchantsBrandGetResponse</h3>

Attributes describing a Get Merchant Brand response

| Field                                                                                                                | Required | Type                                                                                    | Description                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsBrandGetResponse-merchants" class="add-link schema-object-property-key"><code>merchants</code></h4> | optional | Array&lt;[MerchantsBrandGetClean](#MerchantsBrandGetClean "MerchantsBrandGetClean")&gt; | <div class="ref-property-description"><p>The list of cleaned transactions</p><p>See <a href="#MerchantsBrandGetClean">MerchantsBrandGetClean</a> for more information.</div> |

<h4 class="schema-object-example" id="MerchantsBrandGetResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "merchants": [
    {
      "dirty_name": "APPLE.COM/BILL",
      "clean_name": "Apple",
      "status": "OK",
      "logo": "5eb75a5239b76287f44021f8e6e1bd41",
      "logo_url": "https://api.woosmap.com/merchants/logos/5eb75a5239b76287f44021f8e6e1bd41.png",
      "country": "IT"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandgetresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/MerchantsBrandGetResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-merchantsbrandgetresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - MerchantsBrandGetResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_merchantsbrandgetresponse] -->
