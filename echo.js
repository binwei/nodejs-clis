#!/usr/bin/env babel-node

require('./helper')

let fs = require('fs').promise

async function echo() {
    // Your implementation here
    let data = await process.argv[2]
    console.log(data)
}

echo()
