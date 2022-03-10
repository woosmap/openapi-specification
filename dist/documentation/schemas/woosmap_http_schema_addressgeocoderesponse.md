<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_addressgeocoderesponse] -->
<h3 class="schema-object" id="AddressGeocodeResponse">AddressGeocodeResponse</h3>

Address Geocode Response

| Field                                                                                                                               | Required | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AddressGeocodeResponse-address_components" class="add-link schema-object-property-key"><code>address_components</code></h4> | optional | Array&lt;[AddressComponents](#AddressComponents "AddressComponents")&gt; | <div class="ref-property-description"><p>An array containing the separate components applicable to this address.</p><p>See <a href="#AddressComponents">AddressComponents</a> for more information.</div>                                                                                                                                                                                                                                                                                                                                                                     |
| <h4 id="AddressGeocodeResponse-formatted_address" class="add-link schema-object-property-key"><code>formatted_address</code></h4>   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains the text description of the proposal to be used as suggestion in drop down list if needed.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <h4 id="AddressGeocodeResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>                     | optional | [AddressGeometry](#AddressGeometry "AddressGeometry")                    | See [AddressGeometry](#AddressGeometry "AddressGeometry") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <h4 id="AddressGeocodeResponse-public_id" class="add-link schema-object-property-key"><code>public_id</code></h4>                   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains a unique ID for each suggestion. Please use this ID to give feedbacks on results.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <h4 id="AddressGeocodeResponse-types" class="add-link schema-object-property-key"><code>types</code></h4>                           | optional | Array&lt;[AddressTypes](#AddressTypes "AddressTypes")&gt;                | <div class="ref-property-description"><p>The types of result. If result type is a <code>place</code>, additional types may be returned (<code>eat_and_drink</code>, <code>going_out_entertainment</code>, <code>sights_and_museums</code>, <code>natural_and_geographical</code>, <code>transport</code>, <code>accommodations</code>, <code>leisure_and_outdoor</code>, <code>shopping</code>, <code>business_and_services</code>, <code>facilities</code>, <code>areas_and_buildings</code>)</p><p>See <a href="#AddressTypes">AddressTypes</a> for more information.</div> |

<h4 class="schema-object-example" id="AddressGeocodeResponse-example">Example</h4>

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
<a data-label="openapi-github-woosmap-http-schema-addressgeocoderesponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AddressGeocodeResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-addressgeocoderesponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AddressGeocodeResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_addressgeocoderesponse] -->
