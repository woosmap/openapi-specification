<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_distancedistancematrix] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 id="destinations">destinations</h3>

    One or more locations to use as the finishing point for calculating travel distance. The options for the destinations parameter are the same as for the origins parameter, described above. In order to reduce URL size, [encoded polylines](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) are also supported using `enc:encoded-polyline:`

-   <h3 id="origins">origins</h3>

    The starting point for calculating travel distance. You can supply one or more locations separated by the pipe character (|), in the form of latitude/longitude coordinates. They are used unchanged to calculate distance. Ensure that no space exists between the latitude and longitude values. In order to reduce URL size, [encoded polylines](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) are also supported using `enc:encoded-polyline:`

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 id="elements">elements</h3>

    Specifies element values that will be part of the API response (distance and/or duration). if not specified default is `distance`

-   <h3 id="language">language</h3>

    The language code, indicating in which language the results should be returned, if possible. If language is not supplied, the Distance API service will use the navigator language or “en”.

-   <h3 id="method">method</h3>

    Specifies the method to compute the route between the start point and the end point:

    -   `time`: fastest route (default) - `distance`: shortest route

-   <h3 id="mode">mode</h3>

    Specifies the mode of transport to use when calculating distance

-   <h3 id="units">units</h3>

    Specifies the unit system to use when expressing distance as text. Two different units supported:

    -   `metric` (default) returns distances in kilometers and meters \* `imperial` returns distances in miles and feet


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-distancedistancematrix" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-distancedistancematrix" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /distance/distancematrix/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_distancedistancematrix] -->