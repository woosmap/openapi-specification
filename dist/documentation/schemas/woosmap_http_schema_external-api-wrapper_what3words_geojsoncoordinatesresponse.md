<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_external-api-wrapper_what3words_geojsoncoordinatesresponse] -->
<h3 class="schema-object" id="External-api-wrapper_what3words_GeoJsonCoordinatesResponse">GeoJsonCoordinatesResponse</h3>

| Field                                                                                                               | Required     | Type                                                                                            | Description                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="GeoJsonCoordinatesResponse-features" class="add-link schema-object-property-key"><code>features</code></h4> | **required** | Array&lt;[GeoJsonFeature](#External-api-wrapper_what3words_GeoJsonFeature "GeoJsonFeature")&gt; | <div class="ref-property-description"><p>GeoJSON Features</p><p>See <a href="#External-api-wrapper_what3words_GeoJsonFeature">GeoJsonFeature</a> for more information.</div> |
| <h4 id="GeoJsonCoordinatesResponse-type" class="add-link schema-object-property-key"><code>type</code></h4>         | **required** | string                                                                                          | <div class="nonref-property-description"><p>type</p></div>                                                                                                                   |

<h4 class="schema-object-example" id="External-api-wrapper_what3words_GeoJsonCoordinatesResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "features": [
    {
      "bbox": [
        2.294494,
        48.85829,
        2.294535,
        48.858317
      ],
      "geometry": {
        "coordinates": [
          2.294514,
          48.858304
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "country": "FR",
        "nearestPlace": "Paris",
        "words": "couch.spotted.amended",
        "language": "en",
        "map": "https://w3w.co/couch.spotted.amended"
      }
    }
  ],
  "type": "FeatureCollection"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-geojsoncoordinatesresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/External-api-wrapper_what3words_GeoJsonCoordinatesResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-external-api-wrapper-what3words-geojsoncoordinatesresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - External-api-wrapper_what3words_GeoJsonCoordinatesResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_external-api-wrapper_what3words_geojsoncoordinatesresponse] -->
