#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')

async function ls(filePath, recursive) {
    let stat = await fs.stat(filePath)
    if (!stat.isDirectory()) return [filePath]

    let fileNames = []

    for (let fileName of await fs.readdir(filePath)) {
        // Obtain the stat promise from fs.stat(filePath)
        var childPath = path.join(filePath, fileName)
        if (recursive) {
            let result = await ls(childPath, recursive)
            fileNames.push(...result)
        }
        else {
            let stat = await fs.stat(childPath)
            if (!stat.isDirectory()) fileNames.push(childPath)
        }
    }

    return fileNames
}

async function main(dir, recursive) {
    // Call ls() and pass dir, remember to await
    for (let fileName of await ls(dir, recursive)) {
        console.log(fileName)
    }
}

if (process.argv.length > 3 && process.argv[3] == '-R') {
    main(process.argv[2], true)
}
else {
    main(process.argv[2], false)
}
