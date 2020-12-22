module.exports = async config => {
    console.log('> Download starting...')
    config['downloaded'] = true
    console.log('> Download completed')
    return config
}
