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
        regionTag: "woosmap_http_geolocation",
        request: new Request({
            url: new Url({
                protocol: "https",
                host: "api.woosmap.com",
                path: "/geolocation/position",
                query: [
                    {
                        key: "ip_address",
                        value: "163.172.70.225",
                    },
                ],
            }),
            header: [{key: "Referer", value: "http://localhost"}],
        }),
    }
];
