<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiesnearby] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="location">location</h3>

    Center of the search circle.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="categories">categories</h3>

    The categories of points of interest to return. Not specifying any category will not filter returned results. Multiple categories can be passed using the pipe character (`|`) as a separator. Also, intermediate categories can be used. For example: `categories=business.shop|medical.pharmacy|bank`.

-   <h3 class="parameter-name" id="page">page</h3>

    use this page_number to navigate through nearby locators.

-   <h3 class="parameter-name" id="page_size">page_size</h3>

    Defines how many results should be included in a page

-   <h3 class="parameter-name" id="radius">radius</h3>

    radius of the search circle, in meter.

-   <h3 class="parameter-name" id="types">types</h3>

    The types of suggestion to return.

    -   `locality`: includes locality names (from city to village) and suburbs
    -   `postal_code`: publicly-used postal codes around the world
    -   `address`: addresses
    -   `admin_level`: most commonly used administrative areas
    -   `country`: countries as whole point of interest
    -   `airport`: includes all medium sized to international sized airports
    -   `train_station`: includes all train stations
    -   `metro_station`: includes all metro stations
    -   `shopping`: includes shopping malls (or "shopping centers") - *may include private retail brands*
    -   `museum`: includes museums
    -   `tourist_attraction`: includes tourist attractions like the Eiffel tower
    -   `amusement_park`: includes amusement parks like Disneyland Paris
    -   `art_gallery`: includes art galleries
    -   `zoo`: includes zoos

    Not specifying any type will only query `locality` and `postal_code`. Multiple types can be passed using the pipe character (`|`) as a separator. For example: `types=locality|airport|admin_level`.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiesnearby" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiesnearby" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/nearby" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiesnearby] -->