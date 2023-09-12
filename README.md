# Woosmap OpenAPI3 Specification

View the documentation here:
<https://developers.woosmap.com/api-reference/>

## Description

An OpenAPI specification for Woosmap Platform.

| API                                                                              | Status   |
|----------------------------------------------------------------------------------|----------|
| [Geolocation](https://developers.woosmap.com/products/geolocation-api/location/) | Complete |
| [Store Search](https://developers.woosmap.com/products/search-api/get-started/)  | Complete |
| [Data Management](https://developers.woosmap.com/products/data-api/get-started/) | Complete |
| [Localities](https://developers.woosmap.com/products/localities/get-started/)    | Complete |
| [Address](https://developers.woosmap.com/products/address-api/get-started/)      | Complete |
| [Distance](https://developers.woosmap.com/products/distance-api/get-started/)    | Complete |
| [Merchant](https://developers.woosmap.com/products/merchant-api/get-started/)    | Complete |
| Bounds API                                                                       | Complete |

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18437534-dad12f37-6d84-42d1-9889-2f529aee0ab9?action=collection%2Ffork&collection-url=entityId%3D18437534-dad12f37-6d84-42d1-9889-2f529aee0ab9%26entityType%3Dcollection%26workspaceId%3Dwoosmap-public)

## Development

The repository makes use of [Bazel](https://bazel.build/) to generate outputs from the specification and sample
requests.

### Build and test

1. `npm i`
2. `npm run build`

   This generates the following outputs in the dist folder:

    - YAML file containing OpenAPI3 specification
    - JSON file containing OpenAPI3 specification
    - Structure Markdown documents for specification objects
    - Code snippets in multiple languages for sample requests

   > **Note**: The `dist/` folder is included in this repo and should be updated with all changes.

   > **Note**: If a documentation item is not generated, be sure it is included
   in the appropriate index.yml file.

3. `npm run responses` (optional)
   > **Note**: This is an optional step requiring an API key. Set the `WOOSMAP_PUBLIC_API_KEY`
   and `WOOSMAP_PRIVATE_API_KEY` environmental variable before running.

   > **Warning**: Data attached to the `WOOSMAP_PRIVATE_API_KEY` will be deleted. Use an empty test project for this.

   > **Note**: This step only needs to run when the generation code or sample requests have been updated.

   > **Note**: A single response can be updated similar to `npm run responses -- --only woosmap_http_address_details`.

   > `WOOSMAP_PUBLIC_API_KEY=woos-xxx WOOSMAP_PRIVATE_API_KEY=xxxx npm run build:responses`

5. `npm run samples` (optional)

   > **Note**: Generates snippets from requests to be integrated as xCodeSamples in path schemas.


4. `npm run test`

   Validate the OpenAPI Schema
