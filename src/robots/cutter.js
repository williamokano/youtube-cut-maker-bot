module.exports = async config => {
    console.log('> Cut starting...')
    config['cutted'] = true
    console.log('> Cut completed')
    return config
}
