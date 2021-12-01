<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_addressautocompleteresponse] -->
<h3 class="schema-object" id="AddressAutocompleteResponse">AddressAutocompleteResponse</h3>

Attributes describing an Address.

| Field                                                                                                                                  | Required | Type                                                                                                     | Description                                                                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AddressAutocompleteResponse-description" class="add-link schema-object-property-key"><code>description</code></h4>             | optional | string                                                                                                   | <div class="nonref-property-description"><p>Address description to be used as suggestion in drop down list if needed.</p></div>                                                                                              |
| <h4 id="AddressAutocompleteResponse-matched_substring" class="add-link schema-object-property-key"><code>matched_substring</code></h4> | optional | [AddressAutocompleteMatchedFields](#AddressAutocompleteMatchedFields "AddressAutocompleteMatchedFields") | See [AddressAutocompleteMatchedFields](#AddressAutocompleteMatchedFields "AddressAutocompleteMatchedFields") for more information.                                                                                           |
| <h4 id="AddressAutocompleteResponse-public_id" class="add-link schema-object-property-key"><code>public_id</code></h4>                 | optional | string                                                                                                   | <div class="nonref-property-description"><p>Contains a unique ID for each suggestion. Please use this ID if you need to give us feedbacks on results. This ID is also required to perform Address Details request.</p></div> |
| <h4 id="AddressAutocompleteResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>                       | optional | [AddressStatus](#AddressStatus "AddressStatus")                                                          | See [AddressStatus](#AddressStatus "AddressStatus") for more information.                                                                                                                                                    |
| <h4 id="AddressAutocompleteResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>                           | optional | [AddressTypes](#AddressTypes "AddressTypes")                                                             | See [AddressTypes](#AddressTypes "AddressTypes") for more information.                                                                                                                                                       |

<h4 class="schema-object-example" id="AddressAutocompleteResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "public_id": "aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0",
  "description": "London, England, United Kingdom",
  "matched_substring": {
    "description": [
      {
        "offset": 0,
        "length": 4
      }
    ]
  },
  "type": "locality"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-addressautocompleteresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AddressAutocompleteResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a data-label="openapi-github-woosmap-http-schema-addressautocompleteresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AddressAutocompleteResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_addressautocompleteresponse] -->
