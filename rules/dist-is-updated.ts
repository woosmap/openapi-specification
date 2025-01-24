import { options } from "yargs";
import tar from "tar";
import tmp from "tmp";
import { compareSync } from "dir-compare";
import fs from "fs";
import { diffLines } from "diff";

const argv = options({
  archive: {
    type: "string",
    demandOption: true,
  },
  dist: {
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

  const res = compareSync("dist", dir.name, {
    compareContent: true,
    excludeFilter: "**/*-postman.json, **/merged-woosmap-openapi3.json",
    compareDate: false,
  });

  if (!res.same) {
    const differences = res.diffSet
      .filter(diff => diff.state !== 'equal')
      .map(diff => {
        const diffInfo = {
          path1: diff.path1,
          path2: diff.path2,
          relativePath: diff.relativePath,
          name1: diff.name1,
          name2: diff.name2,
          state: diff.state,
          reason: diff.reason,
          contentDiff: null
        };

        if (diff.state === 'distinct' && diff.type1 === 'file' && diff.type2 === 'file') {
          const file1 = fs.readFileSync(`${diff.path1}/${diff.name1}`, 'utf8');
          const file2 = fs.readFileSync(`${diff.path2}/${diff.name2}`, 'utf8');
          const contentDiff = diffLines(file1, file2);
          diffInfo.contentDiff = contentDiff.map(part => ({
            added: part.added,
            removed: part.removed,
            value: part.value,
          }));
        }

        return diffInfo;
      });

    throw `
Differences found between the directories:

${JSON.stringify(differences, null, 2)}

Please run 'npm run build' to update the dist folder.
    `;
  }
};

main(argv);