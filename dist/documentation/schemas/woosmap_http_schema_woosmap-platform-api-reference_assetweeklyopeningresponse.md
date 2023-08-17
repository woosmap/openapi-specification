<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_schema_woosmap-platform-api-reference_assetweeklyopeningresponse] -->
<h3 class="schema-object" id="Woosmap Platform API Reference_AssetWeeklyOpeningResponse">AssetWeeklyOpeningResponse</h3>

The current Weekly Opening taking into account the special hours

| Field                                                                                                               | Required | Type                                                                                                                             | Description                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="AssetWeeklyOpeningResponse-1" class="add-link schema-object-property-key"><code>1</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-2" class="add-link schema-object-property-key"><code>2</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-3" class="add-link schema-object-property-key"><code>3</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-4" class="add-link schema-object-property-key"><code>4</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-5" class="add-link schema-object-property-key"><code>5</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-6" class="add-link schema-object-property-key"><code>6</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-7" class="add-link schema-object-property-key"><code>7</code></h4>               | optional | [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") | See [AssetWeeklyOpeningHoursPeriod](<#Woosmap Platform API Reference_AssetWeeklyOpeningHoursPeriod> "AssetWeeklyOpeningHoursPeriod") for more information. |
| <h4 id="AssetWeeklyOpeningResponse-timezone" class="add-link schema-object-property-key"><code>timezone</code></h4> | optional | [Timezone](<#Woosmap Platform API Reference_Timezone> "Timezone")                                                                | See [Timezone](<#Woosmap Platform API Reference_Timezone> "Timezone") for more information.                                                                |

<h4 class="schema-object-example" id="Woosmap Platform API Reference_AssetWeeklyOpeningResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "1": {
    "hours": [],
    "isSpecial": false
  },
  "2": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "3": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "4": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "5": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "6": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "7": {
    "hours": [
      {
        "end": "22:00",
        "start": "08:30"
      }
    ],
    "isSpecial": false
  },
  "timezone": "Europe/London"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetweeklyopeningresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/blob/main/specification/schemas/Woosmap Platform API Reference_AssetWeeklyOpeningResponse.yml" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-schema-woosmap-platform-api-reference-assetweeklyopeningresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Woosmap Platform API Reference_AssetWeeklyOpeningResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_schema_woosmap-platform-api-reference_assetweeklyopeningresponse] -->
