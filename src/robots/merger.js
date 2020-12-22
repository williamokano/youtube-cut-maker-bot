module.exports = async config => {
    console.log('> Merge starting...')
    config['merge'] = true
    console.log('> Merge completed')
    return config
}
