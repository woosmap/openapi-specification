<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_localitiesnearbycollectionresponse] -->
<h3 class="schema-object" id="LocalitiesNearbyCollectionResponse">LocalitiesNearbyCollectionResponse</h3>

Collection of nearby points of interest.

| Field                                                                                                                           | Required | Type                                                                                          | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="LocalitiesNearbyCollectionResponse-pagination" class="add-link schema-object-property-key"><code>pagination</code></h4> | optional | object                                                                                        | <div class="nonref-property-description"><p>Helps to navigate through paginated results.</p></div>                                                                                      |
| <h4 id="LocalitiesNearbyCollectionResponse-results" class="add-link schema-object-property-key"><code>results</code></h4>       | optional | Array&lt;[LocalitiesNearbyResponse](#LocalitiesNearbyResponse "LocalitiesNearbyResponse")&gt; | <div class="ref-property-description"><p>The array of nearby points of interest.</p><p>See <a href="#LocalitiesNearbyResponse">LocalitiesNearbyResponse</a> for more information.</div> |

<h4 class="schema-object-example" id="LocalitiesNearbyCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "public_id": "l3GuqeKZHfWmNAkjZpLrubLJiKU=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.cinema"
      ],
      "name": "Roxy Cinema New York",
      "geometry": {
        "location": {
          "lat": 40.719292364867385,
          "lng": -74.00482286995577
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0"
          ],
          "long_name": "United States",
          "short_name": "us"
        }
      ]
    },
    {
      "public_id": "tT4jSy9joAjuNmulGzUAyLqooUM=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.cinema"
      ],
      "name": "No Evil Eye",
      "geometry": {
        "location": {
          "lat": 40.72038578413637,
          "lng": -74.00293853430333
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0"
          ],
          "long_name": "United States",
          "short_name": "us"
        }
      ]
    },
    {
      "public_id": "JOEzREEFaVplTOpoWDe9fRjILOc=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.cinema"
      ],
      "name": "iPic Theaters",
      "geometry": {
        "location": {
          "lat": 40.70667827114349,
          "lng": -74.00306652596478
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0"
          ],
          "long_name": "United States",
          "short_name": "us"
        }
      ]
    },
    {
      "public_id": "FUp7UCBwnOkaduBaeH7sb+q49y8=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.cinema"
      ],
      "name": "Regal Battery Park",
      "geometry": {
        "location": {
          "lat": 40.71474199727254,
          "lng": -74.015169072138
        }
      },
      "address_components": [
        {
          "types": [
            "country",
            "administrative_area_level_0"
          ],
          "long_name": "United States",
          "short_name": "us"
        }
      ]
    }
  ],
  "pagination": {
    "previous_page": null,
    "next_page": null
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesNearbyCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesNearbyCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesnearbycollectionresponse] -->
