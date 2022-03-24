<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_addressautocomplete] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="input">input</h3>

    The text string on which to search, for example: "london" or "123 Cross Road". The Woosmap Address API will return predictions matches based on this string and order the results based on their perceived relevance.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="components">components</h3>

    To restrict your results to specific areas. Currently, you can use components to filter over countries. Countries must be passed as three characters string (ISO 3166-1 Alpha 3). Components should be passed as an array of different options which are separated by a `|`.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 639-1 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, the Localities service will use the default language of each country.

-   <h3 class="parameter-name" id="location">location</h3>

    Bias for the results. Should be pass in `lat`,`lng` format.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-addressautocomplete" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-addressautocomplete" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /address/autocomplete/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_addressautocomplete] -->