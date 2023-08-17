<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_distanceisochroneresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_DistanceIsochroneResponse">DistanceIsochroneResponse</h3>

Attributes describing a distance isochrone response.

| Field                                                                                                            | Required | Type                                                                                | Description                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <h4 id="DistanceIsochroneResponse-isoline" class="add-link schema-object-property-key"><code>isoline</code></h4> | optional | object                                                                              | <div class="nonref-property-description"><p>Contains the properties of isoline</p></div>                      |
| <h4 id="DistanceIsochroneResponse-status" class="add-link schema-object-property-key"><code>status</code></h4>   | optional | [DistanceStatus](<#Woosmap Platform API Reference_DistanceStatus> "DistanceStatus") | See [DistanceStatus](<#Woosmap Platform API Reference_DistanceStatus> "DistanceStatus") for more information. |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_DistanceIsochroneResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "status": "OK",
  "isoline": {
    "origin": {
      "lat": 48.709,
      "lng": 2.403
    },
    "distance": {
      "value": 1,
      "text": "1 km"
    },
    "geometry": "s|ihHouuMZ`GdClCsA~QhCnQmBhEvQhWpD|AnHqJ`OwBx@lC|DhAgFnKlBx@v@tHfEvDlBqF{@{NvDgDhAeIbEI~AfL`EnAfHiEiAOE_EuCq@c@cD_FY}C_EqF_@gEoEoKMcCkDsI}@_C}CyG]aG{G[eFoCw@gAiIkDYg@_DwA@"
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-distanceisochroneresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_DistanceIsochroneResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-distanceisochroneresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_DistanceIsochroneResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_distanceisochroneresponse] -->
