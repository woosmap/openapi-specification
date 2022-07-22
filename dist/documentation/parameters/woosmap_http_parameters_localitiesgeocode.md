<!--- This is a generated file, do not edit! -->
<!--- [START woosmap_http_parameters_localitiesgeocode] -->


<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="address">address</h3>

    The input string to geocode. Can represent an address, a street, a locality or a postal code. The `address` parameter must be URL encoded.

-   <h3 class="parameter-name" id="cc_format">cc_format</h3>

    To specify the format for the short [country code](https://en.wikipedia.org/wiki/ISO\_3166-1) expected to be returned in the address_components field (default is `alpha2`).

-   <h3 class="parameter-name" id="components">components</h3>

    A grouping of places to which you would like to restrict your results. Currently, you can use `components` to filter over countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France and `components=country:fr-fr` returns locations only in Metropolitan France. Multiple countries must be passed as multiple country:XX filters, with the pipe character (`|`) as a separator. For example: `components=country:gb|country:fr|country:be|country:sp|country:it` would restrict your results to city names or postal codes within the United Kingdom, France, Belgium, Spain and Italy.

-   <h3 class="parameter-name" id="language">language</h3>

    The language code, using ISO 3166-1 Alpha-2 country codes, indicating in which language the results should be returned, if possible. If language is not supplied, the Localities service will use english as default language. No language necessary for `postal_code` request.

-   <h3 class="parameter-name" id="latlng">latlng</h3>

    The latlng parameter is used for reverse geocoding, it’s required if the `address` parameter is missing.


<p style="text-align: right; font-size: smaller;">Generated from the <a data-label="openapi-github" href="https://github.com/woosmap/openapi-specification" title="Woosmap OpenAPI Specification" class="external">OpenAPI specification</a>.
<a data-label="openapi-github-woosmap-http-parameters-localitiesgeocode" data-action="edit" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub">✎ Edit</a>
<a data-label="openapi-github-woosmap-http-parameters-localitiesgeocode" data-action="bug" style="margin-left: 5px;" href="https://github.com/woosmap/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /localities/geocode" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END woosmap_http_parameters_localitiesgeocode] -->