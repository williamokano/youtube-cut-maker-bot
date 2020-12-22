const { program } = require('commander');

program
    .storeOptionsAsProperties(false)
    .requiredOption('-u, --url <url>', 'Video URL')
    .requiredOption('-t, --title <title>', 'Uploaded title')
    .requiredOption('-s, --start <time>', 'Start time')
    .requiredOption('-e, --end <time>', 'Ending time')
    .option('--tags <tags>', 'Video tags', '')
    .option('-d, --description <description>', 'Video description', '')
    .version('0.0.1')

program.parse(process.argv)

module.exports = program._optionValues
