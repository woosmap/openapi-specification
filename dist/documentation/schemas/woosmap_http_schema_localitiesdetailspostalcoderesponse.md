<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesdetailspostalcoderesponse] -->
<h3 class="schema-object" id="LocalitiesDetailsPostalCodeResponse">LocalitiesDetailsPostalCodeResponse</h3>

Attributes describing a locality. Not all attributes will be available for all locality types.

| Field                                                                                                                    | Required | Type   | Description                                                                                |
| :----------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------------------------------------ |
| <h4 id="LocalitiesDetailsPostalCodeResponse-result" class="add-link schema-object-property-key"><code>result</code></h4> | optional | object | <div class="nonref-property-description"><p>The Root Node for Localities Details</p></div> |

<h4 class="schema-object-example" id="LocalitiesDetailsPostalCodeResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "result": {
    "formatted_address": "SW1A 0AA, City of London",
    "types": [
      "postal_code"
    ],
    "public_id": "QaCU+fBtigK65ztSrqHqUoUDwZw=",
    "name": "SW1A 0AA",
    "geometry": {
      "location": {
        "lat": 51.49984,
        "lng": -0.124663
      }
    },
    "address_components": [
      {
        "types": [
          "country",
          "administrative_area_level_0"
        ],
        "long_name": "United Kingdom",
        "short_name": "GB"
      },
      {
        "types": [
          "administrative_area_level_1"
        ],
        "long_name": "City of London",
        "short_name": "City of London"
      }
    ],
    "addresses": {
      "pagination": {
        "page": 1,
        "page_count": 1,
        "addresses_per_page": 1,
        "address_count": 1
      },
      "list": [
        {
          "public_id": "TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ==",
          "description": "House Of Commons, Houses Of Parliament, London, SW1A 0AA"
        }
      ]
    }
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailspostalcoderesponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesDetailsPostalCodeResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailspostalcoderesponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesDetailsPostalCodeResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesdetailspostalcoderesponse] -->
