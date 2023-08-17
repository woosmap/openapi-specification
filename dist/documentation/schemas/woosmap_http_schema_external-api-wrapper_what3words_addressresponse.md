<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_external-api-wrapper_what3words_addressresponse] -->
<h3 class="schema-object" id="External-api-wrapper_what3words_AddressResponse">AddressResponse</h3>

| Field                                                                                                  | Required     | Type                                                                                         | Description                                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AddressResponse-results" class="add-link schema-object-property-key"><code>results</code></h4> | **required** | Array&lt;[AddressResult](#External-api-wrapper_what3words_AddressResult "AddressResult")&gt; | <div class="ref-property-description"><p>Results</p><p>See <a href="#External-api-wrapper_what3words_AddressResult">AddressResult</a> for more information.</div> |

<h4 class="schema-object-example" id="External-api-wrapper_what3words_AddressResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "types": [
        "address"
      ],
      "formatted_address": "5 Avenue Anatole France, 75007, Paris",
      "geometry": {
        "location": {
          "lng": 2.294597,
          "lat": 48.858819
        },
        "location_type": "ROOFTOP"
      },
      "address_components": [
        {
          "short_name": "FR",
          "long_name": "France",
          "types": [
            "country",
            "administrative_area_level_0"
          ]
        },
        {
          "short_name": "Paris",
          "long_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "short_name": "75007",
          "long_name": "75007",
          "types": [
            "postal_codes"
          ]
        },
        {
          "short_name": "Avenue Anatole France",
          "long_name": "Avenue Anatole France",
          "types": [
            "route"
          ]
        },
        {
          "short_name": "5",
          "long_name": "5",
          "types": [
            "street_number"
          ]
        }
      ]
    },
    {
      "types": [
        "address"
      ],
      "formatted_address": "3 Avenue Anatole France, 75007, Paris",
      "geometry": {
        "location": {
          "lng": 2.294373,
          "lat": 48.858816
        },
        "location_type": "ROOFTOP"
      },
      "address_components": [
        {
          "short_name": "FR",
          "long_name": "France",
          "types": [
            "country",
            "administrative_area_level_0"
          ]
        },
        {
          "short_name": "Paris",
          "long_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "short_name": "75007",
          "long_name": "75007",
          "types": [
            "postal_codes"
          ]
        },
        {
          "short_name": "Avenue Anatole France",
          "long_name": "Avenue Anatole France",
          "types": [
            "route"
          ]
        },
        {
          "short_name": "3",
          "long_name": "3",
          "types": [
            "street_number"
          ]
        }
      ]
    },
    {
      "types": [
        "address"
      ],
      "formatted_address": "7 Avenue Anatole France, 75007, Paris",
      "geometry": {
        "location": {
          "lng": 2.295356,
          "lat": 48.85834
        },
        "location_type": "ROOFTOP"
      },
      "address_components": [
        {
          "short_name": "FR",
          "long_name": "France",
          "types": [
            "country",
            "administrative_area_level_0"
          ]
        },
        {
          "short_name": "Paris",
          "long_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "short_name": "75007",
          "long_name": "75007",
          "types": [
            "postal_codes"
          ]
        },
        {
          "short_name": "Avenue Anatole France",
          "long_name": "Avenue Anatole France",
          "types": [
            "route"
          ]
        },
        {
          "short_name": "7",
          "long_name": "7",
          "types": [
            "street_number"
          ]
        }
      ]
    },
    {
      "types": [
        "address"
      ],
      "formatted_address": "9 Avenue Anatole France, 75007, Paris",
      "geometry": {
        "location": {
          "lng": 2.295343,
          "lat": 48.858199
        },
        "location_type": "ROOFTOP"
      },
      "address_components": [
        {
          "short_name": "FR",
          "long_name": "France",
          "types": [
            "country",
            "administrative_area_level_0"
          ]
        },
        {
          "short_name": "Paris",
          "long_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "short_name": "75007",
          "long_name": "75007",
          "types": [
            "postal_codes"
          ]
        },
        {
          "short_name": "Avenue Anatole France",
          "long_name": "Avenue Anatole France",
          "types": [
            "route"
          ]
        },
        {
          "short_name": "9",
          "long_name": "9",
          "types": [
            "street_number"
          ]
        }
      ]
    },
    {
      "types": [
        "address"
      ],
      "formatted_address": "12 Avenue Pierre Loti, 75007, Paris",
      "geometry": {
        "location": {
          "lng": 2.294511,
          "lat": 48.857747
        },
        "location_type": "ROOFTOP"
      },
      "address_components": [
        {
          "short_name": "FR",
          "long_name": "France",
          "types": [
            "country",
            "administrative_area_level_0"
          ]
        },
        {
          "short_name": "Paris",
          "long_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "short_name": "75007",
          "long_name": "75007",
          "types": [
            "postal_codes"
          ]
        },
        {
          "short_name": "Avenue Pierre Loti",
          "long_name": "Avenue Pierre Loti",
          "types": [
            "route"
          ]
        },
        {
          "short_name": "12",
          "long_name": "12",
          "types": [
            "street_number"
          ]
        }
      ]
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-addressresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/External-api-wrapper_what3words_AddressResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-addressresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - External-api-wrapper_what3words_AddressResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_external-api-wrapper_what3words_addressresponse] -->
