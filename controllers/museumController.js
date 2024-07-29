const { MUSEUM_ERRORS } = require('../constant/error');
const errorMapping = require('../helpers/errorMapping');
const { LogRequest } = require('../helpers/logger');
const { requestMuseum } = require('../services/museum');
const { successResponse } = require('../helpers/response');

const museumUrl = process.env.MUSEUM_URL;

class Controller {
	static async getMuseumList(req, res, next) {
        try {
            const url = `${museumUrl}/objects`
            const options = {
                method: 'get',
                url
            }
            return requestMuseum(options, (result, error = null) => {
                if (error) {
                    LogRequest(url, req.originalUrl, ['Error Request', error])
                    return errorMapping(next, MUSEUM_ERRORS['MUSEUM-001'], error)
                }
                LogRequest(url, req.originalUrl, ['Success Request', result])
                return successResponse(req, res, result)
            })
        } catch (error) {
            next(error)
        }
	}
	static getMuseumDetail(req, res, next) {
        try {
            const objectId = req.params.id
            const url = `${museumUrl}/objects/${objectId}`
            const options = {
                method: 'get',
                url
            }
            return requestMuseum(options, (result, error = null) => {
                if (error) {
                    LogRequest(url, req.originalUrl, ['Error Request', error])
                    return errorMapping(next, MUSEUM_ERRORS['MUSEUM-001'], error)
                }
                if (!result) {
                    LogRequest(url, req.originalUrl, ['Error Request', MUSEUM_ERRORS['MUSEUM-002']])
                    return errorMapping(next, MUSEUM_ERRORS['MUSEUM-002'], error)
                }
                LogRequest(url, req.originalUrl, ['Success Request', result])
                return successResponse(req, res, result)
            })
        } catch (error) {
            next(error)
        }
	}
}

module.exports = Controller;