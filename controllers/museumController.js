const { MUSEUM_ERRORS } = require('../constant/error');
const errorMapping = require('../helpers/errorMapping');
const { LogRequest } = require('../helpers/logger');
const { requestMuseum } = require('../services/museum');
const { successResponse } = require('../helpers/response');

const museumUrl = process.env.MUSEUM_URL;

class Controller {
	static async getMuseumList(req, res, next) {
        try {
            const options = {
                method: 'get',
                url: `${museumUrl}/objects`
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
		const url = `${ urlApi }/${ req.params.id }`;
		request(options )
	}
}

module.exports = Controller;