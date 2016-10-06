#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function rm(filePath) {
    // Use 'await' in here
    function onException(err) {
        console.log(err.message)
    }
    let stat = await fs.stat(filePath).catch(onException)
    if (stat === undefined) return
    if (!stat.isDirectory()) await fs.unlink(filePath).catch(onException)
    else await fs.rmdir(filePath).catch(onException)
}

rm(process.argv[2])
