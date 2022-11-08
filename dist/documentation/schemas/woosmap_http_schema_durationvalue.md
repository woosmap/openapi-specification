<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_durationvalue] -->
<h3 class="schema-object" id="DurationValue">DurationValue</h3>

The total duration to travel this route/leg, expressed in seconds (value) and as text. The textual value gives a structured string for duration in the specified language (if available).

| Field                                                                                            | Required | Type   | Description                                                                       |
| :----------------------------------------------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------------- |
| <h4 id="DurationValue-text" class="add-link schema-object-property-key"><code>text</code></h4>   | optional | string | <div class="nonref-property-description"><p>The readable duration value</p></div> |
| <h4 id="DurationValue-value" class="add-link schema-object-property-key"><code>value</code></h4> | optional | number | <div class="nonref-property-description"><p>The duration in seconds</p></div>     |

<h4 class="schema-object-example" id="DurationValue-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "value": 272.5,
  "text": "5 mins"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-durationvalue" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/DurationValue.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-durationvalue" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - DurationValue" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_durationvalue] -->
