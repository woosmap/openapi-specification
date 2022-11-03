<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistancematrixelementsresponse] -->
<h3 class="schema-object" id="TrafficDistanceMatrixElementsResponse">TrafficDistanceMatrixElementsResponse</h3>

Attributes describing elements of origin and destination returned in Traffic Distance Matrix response.

| Field                                                                                                                          | Required | Type                                                                                                                              | Description                                                                                                                                                                               |
| :----------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceMatrixElementsResponse-elements" class="add-link schema-object-property-key"><code>elements</code></h4> | optional | Array&lt;[TrafficDistanceMatrixElementResponse](#TrafficDistanceMatrixElementResponse "TrafficDistanceMatrixElementResponse")&gt; | <div class="ref-property-description"><p>the route element</p><p>See <a href="#TrafficDistanceMatrixElementResponse">TrafficDistanceMatrixElementResponse</a> for more information.</div> |

<h4 class="schema-object-example" id="TrafficDistanceMatrixElementsResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "elements": [
    {
      "status": "OK",
      "duration_with_traffic": {
        "value": 1424,
        "text": "24 mins"
      },
      "distance": {
        "value": 10583,
        "text": "10.6 km"
      }
    },
    {
      "status": "OK",
      "duration_with_traffic": {
        "value": 1161,
        "text": "19 mins"
      },
      "distance": {
        "value": 10185,
        "text": "10.2 km"
      }
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixelementsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceMatrixElementsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistancematrixelementsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceMatrixElementsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistancematrixelementsresponse] -->
