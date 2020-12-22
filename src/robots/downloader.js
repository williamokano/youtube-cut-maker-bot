const fs = require('fs')
const youtubedl = require('youtube-dl')

module.exports = async config => {
    console.log(`> Download starting from ${config.url}`)
    const video = youtubedl(config.url)
    youtubedl.exec(config.url, ['-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]'], {},
        function exec(err, output) {
            'use strict'
            if (err) {
                throw err
            }
            console.log(output.join('\n'))
        })
    config['downloaded'] = true

    console.log('> Download completed')
    return config
}
