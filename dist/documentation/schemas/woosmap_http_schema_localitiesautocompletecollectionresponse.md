<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesautocompletecollectionresponse] -->
<h3 class="schema-object" id="LocalitiesAutocompleteCollectionResponse">LocalitiesAutocompleteCollectionResponse</h3>

Localities Collection Response containing Localities

| Field                                                                                                                                 | Required | Type                                                                                                            | Description                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesAutocompleteCollectionResponse-localities" class="add-link schema-object-property-key"><code>localities</code></h4> | optional | Array&lt;[LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse")&gt; | See [LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse") for more information. |

<h4 class="schema-object-example" id="LocalitiesAutocompleteCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "localities": [
    {
      "public_id": "Ch6qA8cLmvyvEEoFy6nYeFcEdNU=",
      "type": "locality",
      "description": "London, City of London, United Kingdom",
      "matched_substrings": {
        "name": [
          {
            "offset": 0,
            "length": 4
          }
        ],
        "admin_1": [
          {
            "offset": 8,
            "length": 4
          }
        ],
        "description": [
          {
            "offset": 0,
            "length": 4
          },
          {
            "offset": 16,
            "length": 4
          }
        ]
      },
      "name": "London",
      "admin_0": "United Kingdom",
      "admin_1": "City of London",
      "location": {
        "lat": 51.50732184627219,
        "lng": -0.1276474581028424
      }
    },
    {
      "public_id": "m/T2C4YI2LgszkKXrELBC+9dfC8=",
      "type": "locality",
      "description": "Londonderry/Derry, Derry City and Strabane, United Kingdom",
      "matched_substrings": {
        "name": [
          {
            "offset": 0,
            "length": 4
          }
        ],
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      },
      "name": "Londonderry/Derry",
      "admin_0": "United Kingdom",
      "admin_1": "Derry City and Strabane",
      "location": {
        "lat": 54.997867773710254,
        "lng": -7.321305634744732
      }
    },
    {
      "public_id": "VOBREUi72/VtnsYgE6aI8HNYcxg=",
      "type": "locality",
      "description": "Londesborough, East Riding of Yorkshire, United Kingdom",
      "matched_substrings": {
        "name": [
          {
            "offset": 0,
            "length": 4
          }
        ],
        "description": [
          {
            "offset": 0,
            "length": 4
          }
        ]
      },
      "name": "Londesborough",
      "admin_0": "United Kingdom",
      "admin_1": "East Riding of Yorkshire",
      "location": {
        "lat": 53.898504729546914,
        "lng": -0.6805281011687327
      }
    },
    {
      "public_id": "Js0mQmmeI46X3hiqRj/R4pvb8mQ=",
      "type": "locality",
      "description": "Long Stratton, Norfolk, United Kingdom",
      "name": "Long Stratton",
      "admin_0": "United Kingdom",
      "admin_1": "Norfolk",
      "location": {
        "lat": 52.48782556394062,
        "lng": 1.2330929989479102
      }
    },
    {
      "public_id": "BQOzBfxua+W9eLymBnVKRkqK2Zc=",
      "type": "locality",
      "description": "Long Sutton, Lincolnshire, United Kingdom",
      "name": "Long Sutton",
      "admin_0": "United Kingdom",
      "admin_1": "Lincolnshire",
      "location": {
        "lat": 52.78556417570891,
        "lng": 0.12170158845447077
      }
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesAutocompleteCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesAutocompleteCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesautocompletecollectionresponse] -->
