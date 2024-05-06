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
      "public_id": "emXdi2D7RXOpIthsEyKVGBYZVSc=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.finance.bank"
      ],
      "name": "Citibank",
      "geometry": {
        "location": {
          "lat": 40.7130414767567,
          "lng": -74.0074818610995
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
      "public_id": "95FQZAdnETzbfFTEFVb/oofxJ4U=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.food_and_drinks.restaurant"
      ],
      "name": "Gran Morsi",
      "geometry": {
        "location": {
          "lat": 40.71432885326513,
          "lng": -74.00778746528921
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
      "public_id": "c5rIR48wx55zG9RmeFYI7yujDwg=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.food_and_drinks.restaurant"
      ],
      "name": "Saffron",
      "geometry": {
        "location": {
          "lat": 40.714654825479556,
          "lng": -74.0077106032371
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
      "public_id": "eFFoZUgHxyJJNH+Hpm2MbBXPg5Y=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.food_and_drinks.fast_food"
      ],
      "name": "Burger King",
      "geometry": {
        "location": {
          "lat": 40.71619516782573,
          "lng": -74.00480635760651
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
      "public_id": "6GSB3ngwjf3vpdOUnj2TZO2ecOc=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.food_and_drinks.fast_food"
      ],
      "name": "Dunkin'",
      "geometry": {
        "location": {
          "lat": 40.71471299588757,
          "lng": -74.00777455715831
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
      "public_id": "GjVqQF0y4/8+puILSl4GwcvTpG8=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.shop.grocery"
      ],
      "name": "Barakth & Saiful",
      "geometry": {
        "location": {
          "lat": 40.71499001778744,
          "lng": -74.00766701734061
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
      "public_id": "FAs4bm8/XWAzeqIfWy3c5vNNuJM=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.food_and_drinks.cafe"
      ],
      "name": "Hungry Ghost",
      "geometry": {
        "location": {
          "lat": 40.71527793616147,
          "lng": -74.00745294353355
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
      "public_id": "eev6v7sxhhbvAagkbC5NAKqzGV8=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.shop.grocery"
      ],
      "name": "Mr. Exotix",
      "geometry": {
        "location": {
          "lat": 40.71523761920719,
          "lng": -74.00749141646912
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
      "public_id": "VDUWUBQS+dBD6NJyMqfEondAEZE=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.shop.grocery"
      ],
      "name": "Civic Deli",
      "geometry": {
        "location": {
          "lat": 40.71606784671653,
          "lng": -74.00377261748812
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
      "public_id": "X8aAA+6/fLGaHeZkbc6EiqzOVR8=",
      "types": [
        "point_of_interest"
      ],
      "categories": [
        "business.shop.grocery"
      ],
      "name": "Tribeca Deli Grill",
      "geometry": {
        "location": {
          "lat": 40.7149423247584,
          "lng": -74.00771462655064
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
    "previous_page": 2,
    "next_page": 4
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/LocalitiesNearbyCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-localitiesnearbycollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - LocalitiesNearbyCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_localitiesnearbycollectionresponse] -->
