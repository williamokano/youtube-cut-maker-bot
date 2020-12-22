module.exports = async config => {
    console.log('> Upload starting...')
    config['uploaded'] = true
    console.log('> Upload completed')
    return config
}
