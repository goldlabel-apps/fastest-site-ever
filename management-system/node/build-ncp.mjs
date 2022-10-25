// build-ncp.mjs

import fs from "fs";
import path from "path";
import {uid} from "uid";

let counter = 0;
const files = [];

// /Users/milky/WORKING/dt9-docs/
// /Users/dt9/Node/DT9Media/dt9-env/dt9-docs/
const sourceDir = "/Users/milky/WORKING/dt9-docs/docs/";
const publicDir = "/Users/milky/WORKING/dt9-docs/Docsify/build/docsify/";

const walkSync = (dir, callback) => {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
        const filepath = path.join(dir, file);
        const stats = fs.statSync(filepath);
            if (stats.isDirectory()) {
                walkSync(filepath, callback)
            } else if (stats.isFile()) {
                callback(filepath, stats)
            }
    })
}

const copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                            path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

export const saveFile = (filepath, stats) => {
    counter++;
    const fileSlugs = filepath.split('/');
    let title = fileSlugs[fileSlugs.length - 1].split('.')[0];
    let type = fileSlugs[fileSlugs.length - 1].split('.')[1];
    if (!type) type = '';
    if (type !== 'DS_Store' && type !== 'gitignore' && type.length > 1) {
        files.push({
            uid: `doc_${uid(32)}`,
            title,
            type,
            path: filepath.replace("/Users/milky/WORKING/dt9-docs/Docsify/build", ""),
        });
    };
}

try {
    fs.rmSync(publicDir, { recursive: true, force: true });
    copyRecursiveSync(sourceDir, publicDir);
    walkSync(publicDir, saveFile);

    const responseJSON = {
        title: "Yes, yes.",
        updated: Date.now(),
        media: files,
    }

    fs.writeFile("/Users/milky/WORKING/dt9-docs/Docsify/public/Docsify.json", JSON.stringify(responseJSON, null, 2), (err) => {
      if (err)
        console.error(err);
      else {
        console.log(counter, " files written to /Docsify.json");
      }
    });
} catch (err) {
    console.error(err);
}
