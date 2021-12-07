<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetfeaturecollectionresponse] -->
<h3 class="schema-object" id="AssetFeatureCollectionResponse">AssetFeatureCollectionResponse</h3>

Assets Collection Response as a GeoJSon FeatureCollection with Asset properties

| Field                                                                                                                       | Required     | Type                                                                              | Description                                                                                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetFeatureCollectionResponse-features" class="add-link schema-object-property-key"><code>features</code></h4>     | **required** | Array&lt;[AssetFeatureResponse](#AssetFeatureResponse "AssetFeatureResponse")&gt; | <div class="ref-property-description"><p>the Assets Features</p><p>See <a href="#AssetFeatureResponse">AssetFeatureResponse</a> for more information.</div>                         |
| <h4 id="AssetFeatureCollectionResponse-pagination" class="add-link schema-object-property-key"><code>pagination</code></h4> | **required** | [Pagination](#Pagination "Pagination")                                            | See [Pagination](#Pagination "Pagination") for more information.                                                                                                                    |
| <h4 id="AssetFeatureCollectionResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>             | **required** | string                                                                            | <div class="nonref-property-description"><p>the Geojson Type (only 'FeatureCollection')</p><div class="notranslate">The allowed values include: and `FeatureCollection`</div></div> |

<h4 class="schema-object-example" id="AssetFeatureCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "type": "Feature",
  "properties": {
    "store_id": "10031",
    "name": "Santa Rosa & Yolanda",
    "contact": {
      "phone": "707-527-1006",
      "website": "https://www.starbucks.com/store-locator/store/10031/santa-rosa-yolanda-2688-santa-rosa-ave-santa-rosa-ca-954077625-us"
    },
    "address": {
      "lines": [
        "2688 Santa Rosa Ave",
        "Santa Rosa, CA 95407"
      ],
      "country_code": "US",
      "city": "Santa Rosa",
      "zipcode": "954077625"
    },
    "user_properties": null,
    "tags": [
      "DT",
      "WA",
      "CD",
      "DR",
      "LB",
      "GO",
      "XO",
      "MX",
      "NB",
      "BE",
      "LU",
      "UC"
    ],
    "types": [
      "Coffee shop"
    ],
    "open": {
      "open_now": false,
      "open_hours": [
        {
          "end": "20:00",
          "start": "05:00"
        }
      ],
      "week_day": 2,
      "next_opening": {
        "end": "20:00",
        "start": "05:00",
        "day": "2021-12-07"
      }
    },
    "weekly_opening": {
      "1": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "2": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "3": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "4": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "5": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "6": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "7": {
        "hours": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "isSpecial": false
      },
      "timezone": "America/Los_Angeles"
    },
    "opening_hours": {
      "usual": {
        "1": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "2": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "3": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "4": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "5": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "6": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ],
        "7": [
          {
            "end": "20:00",
            "start": "05:00"
          }
        ]
      },
      "timezone": "America/Los_Angeles"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -122.712924,
      38.41244
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetFeatureCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetfeaturecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetFeatureCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetfeaturecollectionresponse] -->
