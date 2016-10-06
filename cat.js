#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function cat(filePath) {
    // Use 'await' in here
    let data = await fs.readFile(filePath, 'utf8')
    console.log(data)
}

cat(process.argv[2])
