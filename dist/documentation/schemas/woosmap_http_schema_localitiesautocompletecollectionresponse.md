<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesautocompletecollectionresponse] -->
<h3 class="schema-object" id="LocalitiesAutocompleteCollectionResponse">LocalitiesAutocompleteCollectionResponse</h3>

Localities Collection Response containing Localities

| Field                                                                                                                                 | Required     | Type                                                                                                            | Description                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesAutocompleteCollectionResponse-localities" class="add-link schema-object-property-key"><code>localities</code></h4> | **required** | Array&lt;[LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse")&gt; | See [LocalitiesAutocompleteResponse](#LocalitiesAutocompleteResponse "LocalitiesAutocompleteResponse") for more information. |

<h4 class="schema-object-example" id="LocalitiesAutocompleteCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "localities": [
    {
      "public_id": "Ch6qA8cLmvyvEEoFy6nYeFcEdNU=",
      "description": "London, City of London, United Kingdom",
      "name": "London",
      "type": "locality",
      "location": {
        "lat": 51.50732,
        "lng": -0.12764746
      },
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
      "admin_1": "City of London",
      "locality": "",
      "admin_0": "United Kingdom"
    },
    {
      "public_id": "m/T2C4YI2LgszkKXrELBC+9dfC8=",
      "description": "Londonderry/Derry, Derry City and Strabane, United Kingdom",
      "name": "Londonderry/Derry",
      "type": "locality",
      "location": {
        "lat": 54.997868,
        "lng": -7.3213058
      },
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
      "admin_1": "Derry City and Strabane",
      "locality": "",
      "admin_0": "United Kingdom"
    },
    {
      "public_id": "VOBREUi72/VtnsYgE6aI8HNYcxg=",
      "description": "Londesborough, East Riding of Yorkshire, United Kingdom",
      "name": "Londesborough",
      "type": "locality",
      "location": {
        "lat": 53.898506,
        "lng": -0.6805281
      },
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
      "admin_1": "East Riding of Yorkshire",
      "locality": "",
      "admin_0": "United Kingdom"
    },
    {
      "public_id": "Js0mQmmeI46X3hiqRj/R4pvb8mQ=",
      "description": "Long Stratton, Norfolk, United Kingdom",
      "name": "Long Stratton",
      "type": "locality",
      "location": {
        "lat": 52.487827,
        "lng": 1.233093
      },
      "admin_1": "Norfolk",
      "locality": "",
      "admin_0": "United Kingdom"
    },
    {
      "public_id": "BQOzBfxua+W9eLymBnVKRkqK2Zc=",
      "description": "Long Sutton, Lincolnshire, United Kingdom",
      "name": "Long Sutton",
      "type": "locality",
      "location": {
        "lat": 52.786278,
        "lng": 0.12017952
      },
      "admin_1": "Lincolnshire",
      "locality": "",
      "admin_0": "United Kingdom"
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesAutocompleteCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesautocompletecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesAutocompleteCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesautocompletecollectionresponse] -->
