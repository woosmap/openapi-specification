load("@npm//swagger-cli:index.bzl", "swagger_cli", "swagger_cli_test")

def bundle(name, data, entry, visibility = ["//visibility:public"]):
    JSON_FILENAME = "{}.json".format(name)

    swagger_cli(
        name = "raw",
        outs = ["raw.json"],
        args = ["bundle", entry, "--type", "json", "--outfile $@"],
        data = data,
    )

    # example(s) fields cannot have $ref and must be dereferenced
    native.genrule(
        name = "{}-json".format(name),
        outs = [JSON_FILENAME],
        cmd = "$(location //rules:dereference) --spec $(location //:raw.json) --output $@",
        srcs = data + [":raw.json"],
        tools = ["//rules:dereference"],
        visibility = visibility,
    )

    swagger_cli(
        name = "{}-yaml".format(name),
        outs = ["{}.yml".format(name)],
        args = ["bundle", "$(location {})".format(JSON_FILENAME), "--type", "yaml", "--outfile $@"],
        data = [JSON_FILENAME],
    )

def validate(name, data):
    swagger_cli_test(
        name = "{}-validation".format(name),
        args = ["validate", "$(location {})".format(data)],
        data = [data],
    )
