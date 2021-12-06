<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesdetailspostalcoderesponse] -->
<h3 class="schema-object" id="LocalitiesDetailsPostalCodeResponse">LocalitiesDetailsPostalCodeResponse</h3>

Attributes describing a locality. Not all attributes will be available for all locality types.

| Field                                                                                                                                            | Required | Type                                                                     | Description                                                                                                                                                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesDetailsPostalCodeResponse-address_components" class="add-link schema-object-property-key"><code>address_components</code></h4> | optional | Array&lt;[AddressComponents](#AddressComponents "AddressComponents")&gt; | <div class="ref-property-description"><p>An array containing the separate components applicable to this address.</p><p>See <a href="#AddressComponents">AddressComponents</a> for more information.</div> |
| <h4 id="LocalitiesDetailsPostalCodeResponse-addresses" class="add-link schema-object-property-key"><code>addresses</code></h4>                   | optional | object                                                                   | <div class="nonref-property-description"><p>List of adresses attached to this Postal Code</p></div>                                                                                                       |
| <h4 id="LocalitiesDetailsPostalCodeResponse-formatted_address" class="add-link schema-object-property-key"><code>formatted_address</code></h4>   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains the text description of the proposal to be used as suggestion in drop down list if needed.</p></div>                                                 |
| <h4 id="LocalitiesDetailsPostalCodeResponse-geometry" class="add-link schema-object-property-key"><code>geometry</code></h4>                     | optional | object                                                                   | <div class="nonref-property-description"><p>The location of the PostalCode, in latitude and longitude.</p></div>                                                                                          |
| <h4 id="LocalitiesDetailsPostalCodeResponse-public_id" class="add-link schema-object-property-key"><code>public_id</code></h4>                   | optional | string                                                                   | <div class="nonref-property-description"><p>Contains a unique ID for each suggestion. Please use this ID to give feedbacks on results.</p></div>                                                          |
| <h4 id="LocalitiesDetailsPostalCodeResponse-types" class="add-link schema-object-property-key"><code>types</code></h4>                           | optional | Array&lt;[LocalitiesTypes](#LocalitiesTypes "LocalitiesTypes")&gt;       | <div class="ref-property-description"><p>available localities types</p><p>See <a href="#LocalitiesTypes">LocalitiesTypes</a> for more information.</div>                                                  |

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
        "addresses_per_page": 20,
        "address_count": 5
      },
      "list": [
        {
          "description": "Postmasters Redirection Service, House Of Commons Palace Of Westminster, Parliament Square, London, SW1A 0AA",
          "public_id": "DuxKg3/i5t1AuSt1qvwaiSgd+gI="
        },
        {
          "description": "The Speakers House, 1 Parliament Square, London, SW1A 0AA",
          "public_id": "J9y6c0VHd8L5djgVKAmUZir1D74="
        },
        {
          "description": "Speakers Housekeepers Apartment, House Of Commons Palace Of Westminster, Parliament Square, London, SW1A 0AA",
          "public_id": "K13iP+XIfYK2h+6NFqVVX2q0NQ8="
        },
        {
          "description": "House Of Commons, House Of Commons Palace Of Westminster, Parliament Square, London, SW1A 0AA",
          "public_id": "MVZWBfGZQnAQn9JtE9CJZjgeB4Q="
        },
        {
          "description": "Lord Chancellors Residence, House Of Commons Palace Of Westminster, Parliament Square, London, SW1A 0AA",
          "public_id": "i5WqCPd+qTTnZtiXnKzV8KoIpT8="
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
