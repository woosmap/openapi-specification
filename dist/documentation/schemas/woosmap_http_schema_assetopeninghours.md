<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_assetopeninghours] -->
<h3 class="schema-object" id="AssetOpeningHours">AssetOpeningHours</h3>

An object describing the opening hours of an Asset.

| Field                                                                                                      | Required | Type                                                                             | Description                                                                                                |
| :--------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetOpeningHours-special" class="add-link schema-object-property-key"><code>special</code></h4>   | optional | [AssetOpeningHoursSpecial](#AssetOpeningHoursSpecial "AssetOpeningHoursSpecial") | See [AssetOpeningHoursSpecial](#AssetOpeningHoursSpecial "AssetOpeningHoursSpecial") for more information. |
| <h4 id="AssetOpeningHours-timezone" class="add-link schema-object-property-key"><code>timezone</code></h4> | optional | [Timezone](#Timezone "Timezone")                                                 | See [Timezone](#Timezone "Timezone") for more information.                                                 |
| <h4 id="AssetOpeningHours-usual" class="add-link schema-object-property-key"><code>usual</code></h4>       | optional | [AssetOpeningHoursUsual](#AssetOpeningHoursUsual "AssetOpeningHoursUsual")       | See [AssetOpeningHoursUsual](#AssetOpeningHoursUsual "AssetOpeningHoursUsual") for more information.       |

<h4 class="schema-object-example" id="AssetOpeningHours-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "timezone": "Europe/London",
  "usual": {
    "1": [],
    "default": [
      {
        "start": "08:30",
        "end": "22:00"
      }
    ]
  },
  "special": {
    "2015-02-07": [
      {
        "start": "08:00",
        "end": "23:00"
      }
    ]
  }
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-assetopeninghours" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/AssetOpeningHours.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-assetopeninghours" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - AssetOpeningHours" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_assetopeninghours] -->
