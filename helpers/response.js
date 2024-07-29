const { Log } = require("./logger")

function successResponse(req, res, payload) {
    const apiUrl = req.originalUrl
    if (payload) {
        Log('info', apiUrl, ['Success', payload])
        return res.status(200).json({
            status: true,
            data: payload
        })
    }
    Log('info', apiUrl, ['Success'])
    return res.status(200).json({
        status: true,
        data: payload
    })
}

function errorResponse(res,  errorMessage = undefined, errorCode = undefined) {
    if (errorCode && errorMessage) {
        return res.status(200).json({
            status: false,
            data : {
                errorCode: errorCode,
                errorMessage: errorMessage
            }
        })
    }
    return res.status(200).json({
        status: false,
        data: {
            errorCode: 500,
            errorMessage: 'Server Error'
        }
    })
}

module.exports = {
    successResponse,
    errorResponse
}