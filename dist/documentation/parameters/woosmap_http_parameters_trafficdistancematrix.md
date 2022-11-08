<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_trafficdistancematrix] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="destinations">destinations</h3>

    One or more locations to use as the finishing point for calculating travel distance. The options for the destinations parameter are the same as for the origins parameter, described above. In order to reduce URL size, [encoded polylines](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) are also supported using `enc:encoded-polyline:`

-   <h3 class="parameter-name" id="origins">origins</h3>

    The starting point for calculating travel distance. You can supply one or more locations separated by the pipe character (|), in the form of latitude/longitude coordinates. They are used unchanged to calculate distance. Ensure that no space exists between the latitude and longitude values. In order to reduce URL size, [encoded polylines](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) are also supported using `enc:encoded-polyline:`

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="departure_time">departure_time</h3>

    Specifies the date/time at which to base the calculations on for traffic purposes. Valid values are a timestamp (e.g. `1600799173` for the date:`22/09/2020 20:26:13`) or `now`.
    Use either `arrival_time` or `departure_time`, not both.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, indicating in which language the results should be returned, if possible. If language is not supplied, the Distance API service will use the navigator language or “en”.

-   <h3 class="parameter-name" id="routing">routing</h3>

    Specifies what to base the cost calculation on. If not specified default is `fastest`.

    -   `fastest` will include traffic and optimise the route based on the smallest travel time.
    -   `shortest` will optimise based on travel distance.

-   <h3 class="parameter-name" id="units">units</h3>

    Specifies the unit system parameter to use when expressing distance as text. Two different units supported:

    -   `metric` (default) returns distances in kilometers and meters
    -   `imperial` returns distances in miles and feet


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-trafficdistancematrix" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-trafficdistancematrix" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /traffic/distancematrix/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_trafficdistancematrix] -->