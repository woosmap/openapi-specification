<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_addressdetailsresponse] -->
<h3 class="schema-object" id="AddressDetailsResponse">AddressDetailsResponse</h3>

Address Details Response

| Field                                                                                                       | Required     | Type                                            | Description                                                                            |
| :---------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| <h4 id="AddressDetailsResponse-result" class="add-link schema-object-property-key"><code>result</code></h4> | **required** | object                                          | <div class="nonref-property-description"><p>the root node of address details</p></div> |
| <h4 id="AddressDetailsResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional     | [AddressStatus](#AddressStatus "AddressStatus") | See [AddressStatus](#AddressStatus "AddressStatus") for more information.              |

<h4 class="schema-object-example" id="AddressDetailsResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "result": {
    "formatted_address": "London, England, United Kingdom",
    "types": [
      "locality"
    ],
    "public_id": "aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0",
    "address_components": [
      {
        "types": [
          "country"
        ],
        "long_name": "United Kingdom",
        "short_name": "GBR"
      },
      {
        "types": [
          "state"
        ],
        "long_name": "England",
        "short_name": "England"
      },
      {
        "types": [
          "county"
        ],
        "long_name": "London",
        "short_name": "LDN"
      },
      {
        "long_name": "London",
        "short_name": "London",
        "types": [
          "locality"
        ]
      },
      {
        "long_name": "SW1A 2",
        "short_name": "SW1A 2",
        "types": [
          "postal_code"
        ]
      }
    ],
    "geometry": {
      "location_type": "GEOMETRIC_CENTER",
      "location": {
        "lat": 51.50643,
        "lng": -0.12719
      },
      "viewport": {
        "northeast": {
          "lat": 51.68629,
          "lng": 0.28206
        },
        "southwest": {
          "lat": 51.28043,
          "lng": -0.56316
        }
      }
    }
  },
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-addressdetailsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AddressDetailsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-addressdetailsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AddressDetailsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_addressdetailsresponse] -->
