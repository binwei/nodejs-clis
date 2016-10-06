#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')

async function mkdir(filePath) {
    // Use 'await' in here
    var elements = filePath.split('/')
    var dir = elements[0] === '' ? '/' : ''
    for (let e of elements) {
        dir = path.join(dir, e)
        await fs.stat(dir).then(stat => {
            if (stat.isFile()) {
                console.log('Error: ' + dir + " is an existing file")
                return
            }
            if (!stat.isDirectory()) fs.mkdir(dir)
        }, err => {
            fs.mkdir(dir)
        })
    }
}

mkdir(process.argv[2])
