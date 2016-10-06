#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function grep(token, filePath) {
    // Use 'await' in here
    let data = await fs.readFile(filePath, 'utf8')
    var lines = data.split('\n')
    for (let line of lines) {
        if (null != line.match(token)) console.log(line)
    }
}

grep(process.argv[2], process.argv[3])
