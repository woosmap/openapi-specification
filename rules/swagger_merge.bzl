load("@npm//@redocly/cli:index.bzl", "redocly")

def merge(name, data, specs, **kwargs):
    redocly(
        name = "{}-yml".format(name),
        outs = ["//:{}.yml".format(name)],
        args = ["join"] + specs + ["--output", "$(location //:{}.yml)".format(name), "--prefix-components-with-info-prop", "title"],
        data = data,
        **kwargs
    )

    redocly(
        name = "{}-json".format(name),
        outs = ["//:{}.json".format(name)],
        args = ["bundle", "$(location //:{}.yml)".format(name), "--output", "$(location //:{}.json)".format(name), "--ext", "json"],
        data = ["//:{}.yml".format(name)],
        **kwargs
    )

