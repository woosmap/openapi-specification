<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_merchantsbranddirty] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_MerchantsBrandDirty">MerchantsBrandDirty</h3>

Attributes describing each Merchant Brand in dirty transaction

| Field                                                                                                              | Required     | Type   | Description                                                                                                                                                                                                                                              |
| :----------------------------------------------------------------------------------------------------------------- | ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="MerchantsBrandDirty-dirty_name" class="add-link schema-object-property-key"><code>dirty_name</code></h4>   | **required** | string | <div class="nonref-property-description"><p>The dirty name is the unique merchant identifier which is provided on transactions by a payment provider.</p></div>                                                                                          |
| <h4 id="MerchantsBrandDirty-country" class="add-link schema-object-property-key"><code>country</code></h4>         | optional     | string | <div class="nonref-property-description"><p>The country field is not mandatory but strongly suggested in order to refine and be able to differentiate logos from one country to another. The API accepts ISO-3166-1-alpha2 country codes only.</p></div> |
| <h4 id="MerchantsBrandDirty-custom_id" class="add-link schema-object-property-key"><code>custom_id</code></h4>     | optional     | string | <div class="nonref-property-description"><p>This optional field allows integrators to send a value of their choosing and receive it in the body of the response.</p></div>                                                                               |
| <h4 id="MerchantsBrandDirty-description" class="add-link schema-object-property-key"><code>description</code></h4> | optional     | string | <div class="nonref-property-description"><p>The description is provided to you by the payment provider and is the transaction description attached to any payment.</p></div>                                                                             |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-merchantsbranddirty" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_MerchantsBrandDirty.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-merchantsbranddirty" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_MerchantsBrandDirty" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_merchantsbranddirty] -->
