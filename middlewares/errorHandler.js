const { Log } = require("../helpers/logger")
const { errorResponse } = require("../helpers/response")

function errorHandler(err, req, res, next){
    const {
        errorCode, errorMessage
    } = err
    const apiUrl = req.originalUrl
    Log('error', apiUrl , [JSON.stringify(err)])
    return errorResponse(res, errorMessage, errorCode)
}



module.exports = errorHandler
