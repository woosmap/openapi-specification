<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_trafficdistancerouteresponse] -->
<h3 class="schema-object" id="TrafficDistanceRouteResponse">TrafficDistanceRouteResponse</h3>

Attributes describing a traffic distance route response.

| Field                                                                                                             | Required | Type                                                                                                                              | Description                                                                                                                                                                                                                                                                |
| :---------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="TrafficDistanceRouteResponse-routes" class="add-link schema-object-property-key"><code>routes</code></h4> | optional | Array&lt;[TrafficDistanceRouteElementsResponse](#TrafficDistanceRouteElementsResponse "TrafficDistanceRouteElementsResponse")&gt; | <div class="ref-property-description"><p>Contains an array of routes from origin to destination (only one if alternatives is not specified)</p><p>See <a href="#TrafficDistanceRouteElementsResponse">TrafficDistanceRouteElementsResponse</a> for more information.</div> |
| <h4 id="TrafficDistanceRouteResponse-status" class="add-link schema-object-property-key"><code>status</code></h4> | optional | [DistanceStatus](#DistanceStatus "DistanceStatus")                                                                                | See [DistanceStatus](#DistanceStatus "DistanceStatus") for more information.                                                                                                                                                                                               |

<h4 class="schema-object-example" id="TrafficDistanceRouteResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "routes": [
    {
      "legs": [
        {
          "distance": {
            "value": 1073.570921248021,
            "text": "1.1 km"
          },
          "duration_with_traffic": {
            "value": 97,
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
        }
      ],
      "overview_polyline": {
        "points": "e_~kH_rhXkBcDsAwBeAaB]c@a@g@c@g@c@a@[[a@_@YS[Ui@Y]O]K_@Gc@Gi@AcBCg@?_@ESCOMMMMUKYI]Ow@FIFMBI@G@O?IAMCMCKjCsDNShBaCDFDDDBF@F?FABADABEBCBKBM@M?KAKCKCG|@kAfA}A"
      },
      "summary": "route_0",
      "bounds": {
        "northeast": {
          "lat": 49.31575,
          "lng": 4.15297
        },
        "southwest": {
          "lat": 49.310753,
          "lng": 4.145122
        }
      }
    }
  ],
  "status": "OK"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-trafficdistancerouteresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/TrafficDistanceRouteResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-trafficdistancerouteresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TrafficDistanceRouteResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_trafficdistancerouteresponse] -->
