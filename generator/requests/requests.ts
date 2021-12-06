import {PostJsonRequest, Request, SnippetRequest} from "./types";

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
        regionTag: "woosmap_http_assets_collection_request",
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
                        key: "component",
                        value: "country:UK",
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
        regionTag: "woosmap_http_distance_route",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/distance/route/json",
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
            }),
            header: [{key: "Referer", value: "http://localhost"}],
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
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    },
];
