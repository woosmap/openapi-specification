<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistanceleg] -->
<h3 class="schema-object" id="TrafficDistanceLeg">TrafficDistanceLeg</h3>

Leg in a route

| Field                                                                                                                                       | Required | Type                                            | Description                                                               |
| :------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceLeg-distance" class="add-link schema-object-property-key"><code>distance</code></h4>                                 | optional | [DistanceValue](#DistanceValue "DistanceValue") | See [DistanceValue](#DistanceValue "DistanceValue") for more information. |
| <h4 id="TrafficDistanceLeg-duration_with_traffic" class="add-link schema-object-property-key"><code>duration_with_traffic</code></h4>       | optional | [DurationValue](#DurationValue "DurationValue") | See [DurationValue](#DurationValue "DurationValue") for more information. |
| <h4 id="TrafficDistanceLeg-duration_without_traffic" class="add-link schema-object-property-key"><code>duration_without_traffic</code></h4> | optional | [DurationValue](#DurationValue "DurationValue") | See [DurationValue](#DurationValue "DurationValue") for more information. |
| <h4 id="TrafficDistanceLeg-end_location" class="add-link schema-object-property-key"><code>end_location</code></h4>                         | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information. |
| <h4 id="TrafficDistanceLeg-start_location" class="add-link schema-object-property-key"><code>start_location</code></h4>                     | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information. |

<h4 class="schema-object-example" id="TrafficDistanceLeg-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "distance": {
    "value": 1073.570921248021,
    "text": "1.1 km"
  },
  "duration_with_traffic": {
    "value": 100,
    "text": "2 mins"
  },
  "duration_without_traffic": {
    "value": 88,
    "text": "1 min"
  },
  "start_location": {
    "lat": 49.310753,
    "lng": 4.1451221
  },
  "end_location": {
    "lat": 49.3134,
    "lng": 4.15297
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistanceleg" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceLeg.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistanceleg" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceLeg" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistanceleg] -->
