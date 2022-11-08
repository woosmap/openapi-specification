<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancerouteelementsresponse] -->
<h3 class="schema-object" id="DistanceRouteElementsResponse">DistanceRouteElementsResponse</h3>

Attributes describing routes from an origin to a destination returned in distance route response.

| Field                                                                                                                                    | Required | Type                                                   | Description                                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceRouteElementsResponse-bounds" class="add-link schema-object-property-key"><code>bounds</code></h4>                       | optional | [Bounds](#Bounds "Bounds")                             | See [Bounds](#Bounds "Bounds") for more information.                                                                                                  |
| <h4 id="DistanceRouteElementsResponse-legs" class="add-link schema-object-property-key"><code>legs</code></h4>                           | optional | Array&lt;[DistanceLeg](#DistanceLeg "DistanceLeg")&gt; | <div class="ref-property-description"><p>Legs part of the route response</p><p>See <a href="#DistanceLeg">DistanceLeg</a> for more information.</div> |
| <h4 id="DistanceRouteElementsResponse-overview_polyline" class="add-link schema-object-property-key"><code>overview_polyline</code></h4> | optional | [EncodedPolyline](#EncodedPolyline "EncodedPolyline")  | See [EncodedPolyline](#EncodedPolyline "EncodedPolyline") for more information.                                                                       |
| <h4 id="DistanceRouteElementsResponse-summary" class="add-link schema-object-property-key"><code>summary</code></h4>                     | optional | string                                                 | <div class="nonref-property-description"><p>A short name for the route.</p></div>                                                                     |

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancerouteelementsresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceRouteElementsResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancerouteelementsresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceRouteElementsResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancerouteelementsresponse] -->
