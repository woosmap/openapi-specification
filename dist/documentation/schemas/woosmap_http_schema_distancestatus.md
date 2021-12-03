<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_distancestatus] -->
<h3 class="schema-object" id="DistanceStatus">DistanceStatus</h3>

Returns more info on if the request was successful or not.

- `OK` indicates the response contains a valid result. \* `INVALID_REQUEST` indicates that the provided request was invalid (e.g. wrong URL syntax). \* `MAX_ELEMENTS_EXCEEDED` indicates that the product of origins and destinations exceeds the per-query limit (fixed at 200 elts/q). \* `MAX_ROUTE_LENGTH_EXCEEDED` indicates that at least one of requested route is too long and the matrix cannot be processed (>1000km). \* `REQUEST_DENIED` indicates that the service denied use of the Distance API service (e.g. wrong API Key, wrong/no referer, …). \* `UNKNOWN_ERROR` indicates a Distance API request could not be processed due to a server error. The request may succeed if you try again. \* `OVER_QUERY_LIMIT` (associated to a 429 status code) indicates that the number of queries per second (QPS) or the number of elements per second (EPS) exceed the [usage limits](https://developers.woosmap.com/products/distance-api/distance-matrix-endpoint/#usage-limits)

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-distancestatus" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DistanceStatus.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-distancestatus" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DistanceStatus" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_distancestatus] -->
