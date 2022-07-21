import {DeleteRequest, PostJsonRequest, PutJsonRequest, Request, SnippetRequest} from "./types";

import {Url} from "postman-collection";
import path from "path";
import {readFileSync} from "fs";
import yaml from "js-yaml";

function parseRequestBody(filename) {
    if (filename.match(/\.yml$/)) {
        return yaml.load(
            readFileSync(path.resolve(__dirname, filename)).toString()
        );
    }

    return JSON.parse(
        readFileSync(path.resolve(__dirname, filename)).toString()
    ) as any;
}

export const REQUESTS: SnippetRequest[] = [
    {
        regionTag: "woosmap_http_assets_create_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_address_autocomplete_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/autocomplete/json",
                query: [
                    {
                        key: "input",
                        value: "Lond",
                    },
                    {
                        key: "components",
                        value: "country:gb",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_address_details",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/details/json",
                query: [
                    {
                        key: "public_id",
                        value: "aGVyZTpjbTpuYW1lZHBsYWNlOjIwMzM3NDU0",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_address_geocode_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/address/geocode/json",
                query: [
                    {
                        key: "address",
                        value: "Place de la Resistance",
                    },
                    {
                        key: "components",
                        value: "country:FR"
                    },
                    {
                        key: "limit",
                        value: "5"
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_distance_matrix",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/distancematrix/json",
                query: [
                    {
                        key: "origins",
                        value: "48.709,2.403",
                    },
                    {
                        key: "destinations",
                        value: "48.709,2.303|48.768,2.338",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "elements",
                        value: "duration_distance",
                    },
                    {
                        key: "method",
                        value: "distance",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_distance_matrix_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/distance/distancematrix/json",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_distance_matrix_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_distance_route",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/route/json",
                query: [
                    {
                        key: "origin",
                        value: "48.709,2.403",
                    },
                    {
                        key: "destination",
                        value: "48.709,2.303",
                    },
                    {
                        key: "mode",
                        value: "driving",
                    },
                    {
                        key: "language",
                        value: "en",
                    },
                    {
                        key: "alternatives",
                        value: "true",
                    },
                    {
                        key: "waypoints",
                        value: "48.850077,3.311124|48.850077,3.411124",
                    },
                    {
                        key: "method",
                        value: "distance",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_geolocation_position",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/geolocation/position",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "ip_address",
                        value: "173.79.254.254",
                    },
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_geolocation_stores",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/geolocation/stores",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "ip_address",
                        value: "173.79.254.254",
                    },
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_localities_autocomplete_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/autocomplete/",
                query: [
                    {
                        key: "input",
                        value: "Lond",
                    },
                    {
                        key: "components",
                        value: "country:gb",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_details_address",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/details",
                query: [
                    {
                        key: "public_id",
                        value: "TVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPV9fTVZaV0JmR1pRbkFRbjlKdEU5Q0paamdlQjRRPQ==",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_details_postal_code",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/details",
                query: [
                    {
                        key: "public_id",
                        value: "QaCU+fBtigK65ztSrqHqUoUDwZw=",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_localities_geocode_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/localities/geocode",
                query: [
                    {
                        key: "address",
                        value: "Place Jeanne-d'Arc",
                    },
                    {
                        key: "components",
                        value: "country:FR"
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_merchants_brand",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/merchants/brand",
                query: [
                    {
                        key: "dirty_name",
                        value: "APPLE.COM%2FBILL",
                    }
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_merchants_brand_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/merchants/brand",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_merchants_brand_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_merchants_place",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/merchants/place",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_merchants_place_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_asset_feature_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/search/",
                query: [
                    {
                        key: "lat",
                        value: "51.50976",
                    },
                    {
                        key: "lng",
                        value: "-0.145276",
                    },
                    {
                        key: "radius",
                        value: "1000",
                    },

                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_asset_autocomplete_feature_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/autocomplete/",
                query: [
                    {
                        key: "lat",
                        value: "51.50976",
                    },
                    {
                        key: "lng",
                        value: "-0.145276",
                    },
                    {
                        key: "radius",
                        value: "50000",
                    },
                    {
                        key: "query",
                        value: "localized:street",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_asset_feature",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/10031/"
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
    {
        regionTag: "woosmap_http_assets_replace_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/stores/replace",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_assets_update_request",
        request: new PutJsonRequest({
            url: "https://api.woosmap.com/stores",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_assets_update_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_zones_collection_request",
        request: new PostJsonRequest({
            url: "https://api.woosmap.com/zones",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_zones_collection_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_zones",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/ZoneA/",
                query: [
                    {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    }
                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_zones_collection",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/",
                query: [
                     {
                        key: "private_key",
                        value: "YOUR_PRIVATE_API_KEY",
                    },
                    {
                        key: "limit",
                        value: "2",
                    },
                    {
                        key: "offset",
                        value: "1",
                    },

                ],
            })
        }),
    },
    {
        regionTag: "woosmap_http_zones_update_request",
        request: new PutJsonRequest({
            url: "https://api.woosmap.com/zones",
            json: parseRequestBody(
                "../../specification/requests/woosmap_http_zones_update_request.yml"
            ),
        }),
    },
    {
        regionTag: "woosmap_http_zones_delete_request",
        request: new DeleteRequest({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/zones/"
            }),
        }),
    },
    {
        regionTag: "woosmap_http_assets_delete_request",
        request: new DeleteRequest({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/stores/"
            }),
        }),
    },
];
