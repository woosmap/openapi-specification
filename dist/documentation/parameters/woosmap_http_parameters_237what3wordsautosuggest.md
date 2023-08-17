<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_237what3wordsautosuggest] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="input">input</h3>

    The full or partial 3 word address to obtain suggestions for. At minimum this must be the first two complete words plus at least one character from the third word.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="clip-to-bounding-box">clip-to-bounding-box</h3>

    Restrict AutoSuggest results to a bounding box, specified by coordinates.south_lat,west_lng,north_lat,east_lng, where: south_lat less than or equal to north_lat, west_lng less than or equal to east_lng.

-   <h3 class="parameter-name" id="clip-to-circle">clip-to-circle</h3>

    Restrict AutoSuggest results to a circle, specified by lat, lng, kilometres, where kilometres is the radius of the circle.

-   <h3 class="parameter-name" id="clip-to-country">clip-to-country</h3>

    Restricts AutoSuggest to only return results inside the countries specified by comma-separated list of ISO 3166-1 alpha-2 country codes.

-   <h3 class="parameter-name" id="clip-to-polygon">clip-to-polygon</h3>

    Restrict AutoSuggest results to a polygon, specified by a comma-separated list of lat, lng pairs. The polygon should be closed, i.e. the first element should be repeated as the last element; also the list should contain at least 4 pairs. The API is currently limited to accepting up to 25 pairs.

-   <h3 class="parameter-name" id="focus">focus</h3>

    This is a location, specified as latitude,longitude (often where the user making the query is). If specified, the results will be weighted to give preference to those near the focus.

-   <h3 class="parameter-name" id="input-type">input-type</h3>

    For power users, used to specify voice input mode.

-   <h3 class="parameter-name" id="language">language</h3>

    For normal text input, specifies a fallback language, which will help guide AutoSuggest if the input is particularly messy. A supported address language as an ISO 639-1 2 letter code.

-   <h3 class="parameter-name" id="prefer-land">prefer-land</h3>

    Makes AutoSuggest prefer results on land to those in the sea.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-237what3wordsautosuggest" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-237what3wordsautosuggest" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /237/what3words/autosuggest" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_237what3wordsautosuggest] -->