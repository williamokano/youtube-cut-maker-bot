#!/usr/bin/env node

const config = require('../src/configService')
const robots = require('../src/robots')

// Implement better chain
Promise.resolve(config)
    .then(robots.downloader)
    .then(robots.cutter)
    .then(robots.merger)
    .then(robots.uploader)
    .then(config => {
        console.log('> Finished')
        console.log(config)
    })
