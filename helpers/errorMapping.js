function errorMapping(next, ERROR_MAPPING, err) {
    const {errorCode, errorMessage} = ERROR_MAPPING
    return next({
        errorCode,
        errorMessage,
        message: err.message
    })
}

module.exports = errorMapping