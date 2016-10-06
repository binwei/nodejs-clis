#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function touch(filePath) {
    // Use 'await' in here
    let [fd, stat] = await Promise.all([
        fs.open(filePath, 'r'),
        fs.stat(filePath)
    ])

    await fs.futimes(fd, stat.atime.getTime(), Date.now() / 1000)
}

touch(process.argv[2])
