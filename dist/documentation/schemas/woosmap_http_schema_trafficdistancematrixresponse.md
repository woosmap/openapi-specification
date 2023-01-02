<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistancematrixresponse] -->
<h3 class="schema-object" id="TrafficDistanceMatrixResponse">TrafficDistanceMatrixResponse</h3>

Attributes describing a Traffic Distance Matrix response.

| Field                                                                                                              | Required | Type                                                                                                                                 | Description                                                                                                                                                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceMatrixResponse-rows" class="add-link schema-object-property-key"><code>rows</code></h4>     | optional | Array&lt;[TrafficDistanceMatrixElementsResponse](#TrafficDistanceMatrixElementsResponse "TrafficDistanceMatrixElementsResponse")&gt; | <div class="ref-property-description"><p>Contains an array of elements for each pair of origin and destination</p><p>See <a href="#TrafficDistanceMatrixElementsResponse">TrafficDistanceMatrixElementsResponse</a> for more information.</div> |
| <h4 id="TrafficDistanceMatrixResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional | [DistanceStatus](#DistanceStatus "DistanceStatus")                                                                                   | See [DistanceStatus](#DistanceStatus "DistanceStatus") for more information.                                                                                                                                                                    |

<h4 class="schema-object-example" id="TrafficDistanceMatrixResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "rows": [
    {
      "elements": [
        {
          "status": "OK",
          "duration_with_traffic": {
            "value": 1420,
            "text": "24 mins"
          },
          "distance": {
            "value": 10731,
            "text": "10.7 km"
          }
        },
        {
          "status": "OK",
          "duration_with_traffic": {
            "value": 1146,
            "text": "19 mins"
          },
          "distance": {
            "value": 10185,
            "text": "10.2 km"
          }
        }
      ]
    }
  ],
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceMatrixResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceMatrixResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistancematrixresponse] -->
