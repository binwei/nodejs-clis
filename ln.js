#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function ln(filePath, linkPath) {
    // Use 'await' in here
    let stat = await fs.stat(filePath).catch(err => console.log(err.message))
    if (stat === undefined) return
    await fs.symlink(filePath, linkPath).catch(console.log)
}

ln(process.argv[2], process.argv[3])
