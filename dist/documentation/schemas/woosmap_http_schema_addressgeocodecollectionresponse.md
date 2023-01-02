<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_addressgeocodecollectionresponse] -->
<h3 class="schema-object" id="AddressGeocodeCollectionResponse">AddressGeocodeCollectionResponse</h3>

Address Geocode Collection Response. Contains one or more Addresses with coordinates (default to one result for reverse geocoding)

| Field                                                                                                                   | Required | Type                                                                                    | Description                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <h4 id="AddressGeocodeCollectionResponse-results" class="add-link schema-object-property-key"><code>results</code></h4> | optional | Array&lt;[AddressGeocodeResponse](#AddressGeocodeResponse "AddressGeocodeResponse")&gt; | See [AddressGeocodeResponse](#AddressGeocodeResponse "AddressGeocodeResponse") for more information. |
| <h4 id="AddressGeocodeCollectionResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>   | optional | [AddressStatus](#AddressStatus "AddressStatus")                                         | See [AddressStatus](#AddressStatus "AddressStatus") for more information.                            |

<h4 class="schema-object-example" id="AddressGeocodeCollectionResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "results": [
    {
      "formatted_address": "Place de la Résistance, 92130 Issy-les-Moulineaux, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Ile-de-France",
          "short_name": "IDF"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Hauts-de-Seine",
          "short_name": "Hauts-de-Seine"
        },
        {
          "long_name": "Issy-les-Moulineaux",
          "short_name": "Issy-les-Moulineaux",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "92130",
          "short_name": "92130",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 48.82138,
          "lng": 2.25009
        },
        "viewport": {
          "northeast": {
            "lat": 48.82195,
            "lng": 2.25052
          },
          "southwest": {
            "lat": 48.8209,
            "lng": 2.24999
          }
        }
      }
    },
    {
      "formatted_address": "Place de la Résistance, 75007 Paris, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Ile-de-France",
          "short_name": "IDF"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Paris",
          "short_name": "Paris"
        },
        {
          "long_name": "Paris",
          "short_name": "Paris",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "7e Arrondissement",
          "short_name": "7e Arrondissement",
          "types": [
            "district"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "75007",
          "short_name": "75007",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 48.86228,
          "lng": 2.30346
        },
        "viewport": {
          "northeast": {
            "lat": 48.86231,
            "lng": 2.30546
          },
          "southwest": {
            "lat": 48.86191,
            "lng": 2.30147
          }
        }
      }
    },
    {
      "formatted_address": "Place de la Résistance, 37000 Tours, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Centre-Val de Loire",
          "short_name": "CVL"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Indre-et-Loire",
          "short_name": "Indre-et-Loire"
        },
        {
          "long_name": "Tours",
          "short_name": "Tours",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "Centre",
          "short_name": "Centre",
          "types": [
            "district"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "37000",
          "short_name": "37000",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 47.3944,
          "lng": 0.68574
        },
        "viewport": {
          "northeast": {
            "lat": 47.39473,
            "lng": 0.68626
          },
          "southwest": {
            "lat": 47.39416,
            "lng": 0.68542
          }
        }
      }
    },
    {
      "formatted_address": "Place de la Résistance, 94500 Champigny-sur-Marne, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Ile-de-France",
          "short_name": "IDF"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Val-de-Marne",
          "short_name": "Val-de-Marne"
        },
        {
          "long_name": "Champigny-sur-Marne",
          "short_name": "Champigny-sur-Marne",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "94500",
          "short_name": "94500",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 48.81359,
          "lng": 2.55785
        },
        "viewport": {
          "northeast": {
            "lat": 48.81398,
            "lng": 2.55815
          },
          "southwest": {
            "lat": 48.81359,
            "lng": 2.55754
          }
        }
      }
    },
    {
      "formatted_address": "Place de la Résistance, 21400 Châtillon-sur-Seine, France",
      "types": [
        "route"
      ],
      "address_components": [
        {
          "types": [
            "country"
          ],
          "long_name": "France",
          "short_name": "FRA"
        },
        {
          "types": [
            "state"
          ],
          "long_name": "Bourgogne-Franche-Comte",
          "short_name": "BFC"
        },
        {
          "types": [
            "county"
          ],
          "long_name": "Côte-d'Or",
          "short_name": "Côte-d'Or"
        },
        {
          "long_name": "Châtillon-sur-Seine",
          "short_name": "Châtillon-sur-Seine",
          "types": [
            "locality"
          ]
        },
        {
          "long_name": "Place de la Résistance",
          "short_name": "Place de la Résistance",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "21400",
          "short_name": "21400",
          "types": [
            "postal_code"
          ]
        }
      ],
      "geometry": {
        "location_type": "GEOMETRIC_CENTER",
        "location": {
          "lat": 47.86017,
          "lng": 4.57346
        },
        "viewport": {
          "northeast": {
            "lat": 47.86048,
            "lng": 4.57421
          },
          "southwest": {
            "lat": 47.86003,
            "lng": 4.57263
          }
        }
      }
    }
  ],
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-addressgeocodecollectionresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AddressGeocodeCollectionResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-addressgeocodecollectionresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AddressGeocodeCollectionResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_addressgeocodecollectionresponse] -->
