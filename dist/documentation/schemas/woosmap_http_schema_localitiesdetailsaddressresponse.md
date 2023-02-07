<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesdetailsaddressresponse] -->
<h3 class="schema-object" id="LocalitiesDetailsAddressResponse">LocalitiesDetailsAddressResponse</h3>

Attributes describing. Not all attributes will be available for all locality types.

| Field                                                                                                                 | Required | Type   | Description                                                                                |
| :-------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------------------------------------ |
| <h4 id="LocalitiesDetailsAddressResponse-result" class="add-link schema-object-property-key"><code>result</code></h4> | optional | object | <div class="nonref-property-description"><p>The Root Node for Localities Details</p></div> |

<h4 class="schema-object-example" id="LocalitiesDetailsAddressResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "result": {
    "public_id": "TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ==",
    "types": [
      "address"
    ],
    "formatted_address": "House Of Commons, Houses Of Parliament, London, SW1A 0AA",
    "geometry": {
      "location": {
        "lat": 51.4998415,
        "lng": -0.1246375
      },
      "accuracy": "ROOFTOP"
    },
    "address_components": [
      {
        "short_name": "GB",
        "long_name": "United Kingdom",
        "types": [
          "country",
          "administrative_area_level_0"
        ]
      },
      {
        "short_name": "City of London",
        "long_name": "City of London",
        "types": [
          "administrative_area_level_1"
        ]
      },
      {
        "short_name": "London",
        "long_name": "London",
        "types": [
          "locality"
        ]
      },
      {
        "short_name": "SW1A 0AA",
        "long_name": "SW1A 0AA",
        "types": [
          "postal_codes"
        ]
      },
      {
        "short_name": "Houses Of Parliament",
        "long_name": "Houses Of Parliament",
        "types": [
          "premise"
        ]
      },
      {
        "short_name": "House Of Commons",
        "long_name": "House Of Commons",
        "types": [
          "organisation"
        ]
      }
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsaddressresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesDetailsAddressResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesdetailsaddressresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesDetailsAddressResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesdetailsaddressresponse] -->
