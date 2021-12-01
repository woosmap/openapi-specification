

import { options } from "yargs";
import tar from "tar";
import tmp from "tmp";
import fs from "fs";
import path from "path";
import glob from "glob";

const argv = options({
  archive: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = (argv) => {
  const dir = tmp.dirSync();

  tar.x({
    file: argv.archive,
    sync: true,
    C: dir.name,
  });

  const generatedSchemaFiles = fs.readdirSync(
    path.join(dir.name, "documentation", "schemas")
  );

  glob(
    path.join(__dirname, "..", "specification", "schemas", "**", "*.yml"),
    (_: any, files: string[]) => {
      files
        .map(
          (f) =>
            `woosmap_http_schema_${path
              .basename(f)
              .toLocaleLowerCase()
              .replace(".yml", ".md")}`
        )
        // remove the index files as those are not generated
        .filter((f) => f.indexOf("_index") === -1)
        .forEach((f) => {
          if (generatedSchemaFiles.indexOf(f) === -1) {
            throw `
		
Please update specification/schemas/_index.yml to generate ${f}.
		
`;
          }
        });
    }
  );
};

main(argv);
