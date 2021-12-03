<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiesautocomplete] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 id="input">input</h3>

    The text string on which to search, for example: "london" or "123 Cross Road". The Woosmap Localities API will return predictions matches based on this string and order the results based on their perceived relevance.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 id="components">components</h3>

    A grouping of places to which you would like to restrict your results. Currently, you can use `components` to filter over countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France and `components=country:fr-fr` returns locations only in Metropolitan France. Multiple countries must be passed as multiple country:XX filters, with the pipe character (`|`) as a separator. For example: `components=country:gb|country:fr|country:be|country:sp|country:it` would restrict your results to city names or postal codes within the United Kingdom, France, Belgium, Spain and Italy.

-   <h3 id="data">data</h3>

    Two values for this parameter: `standard` or `advanced`. By default, if the parameter is not defined, value is set as `standard`. The `advanced` value opens suggestions to worldwide postal codes in addition to postal codes for Western Europe. ***A dedicated option subject to specific billing on your license is needed to use this parameter. Please contact us if you are interested in using this parameter and you do not have subscribed the proper option yet.***

-   <h3 id="extended">extended</h3>

    If set, this parameter allows a refined search over locality names that bears the same postal code. By triggering this parameter, integrators will benefit from a search spectrum on the `locality` type that ***includes postal codes***. To avoid confusion, it is recommended not to activate this parameter along with the `postal_code` type which could lead to duplicate locations. Also, the default description returned by the API changes to `name (postal code), admin_1, admin_0`. It is only available for France and Italy.

-   <h3 id="language">language</h3>

    The language code, using ISO 3166-1 Alpha-2 country codes, indicating in which language the results should be returned, if possible. Searches are also biased to the selected language; results in the selected language may be given a higher ranking. If language is not supplied, the Localities service will use the default language of each country. No language necessary for `postal_code` request.

-   <h3 id="types">types</h3>

    The types of suggestion to return.

    -   `locality`: includes locality names (from city to village) and suburbs \* `postal_code`: publicly-used postal codes around the world \* `address`: addresses (only available for UK and France) \* `admin_level`: most commonly used administrative areas \* `country`: countries as whole point of interest \* `airport`: includes all medium sized to international sized airports \* `train_station`: includes all train stations \* `metro_station`: includes all metro stations \* `shopping`: includes shopping malls (or "shopping centers") - *may include private retail brands* \* `museum`: includes museums \* `tourist_attraction`: includes tourist attractions like the Eiffel tower \* `amusement_park`: includes amusement parks like Disneyland Paris \* `art_gallery`: includes art galleries \* `zoo`: includes zoos

    > The information returned on an `address` suggestion contain only a "single-line" description. A request to the [Details endpoint](/products/localities/details/) of the API must be performed to retrieve the location (geographic coordinates) and the address components (street address, zipcode, city..).

    Not specifying any type will only query `locality` and `postal_code`. Multiple types can be passed using the pipe character (`|`) as a separator. For example: `types=locality|airport|admin_level`.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiesautocomplete" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiesautocomplete" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/autocomplete" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiesautocomplete] -->