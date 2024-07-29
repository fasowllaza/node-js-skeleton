const log = require('npmlog')

function Log (level, prefix = '', message = []) {
    const logMessage = JSON.stringify(message)
    const route = `api: ${prefix}`
    switch (level) {
        case 'info':
            log.info(route, logMessage)
            break;
        case 'warn':
            log.warn(route, logMessage)
            break;
        case 'error':
            log.error(route, logMessage)
            break;
        case 'debug':
            log.info(route, logMessage, ['debug'])
            break;
    default:
        log.info(route, logMessage)
        break;
    }
}

function LogRequest (url, prefix, message) {
    const logMessage = JSON.stringify(message)
    const route = `api: ${prefix}`
    log.info(route, `requestUrl: ${url}, ${logMessage}`)
}

module.exports = { Log, LogRequest }