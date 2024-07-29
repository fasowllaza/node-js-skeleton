const { request } = require('../services/museum');

const urlApi = process.env.BASE_URL;

class Controller {
	static async getRecruitment(req, res, next) {
		try {
			const newUrl = addParameter(`${ urlApi }.json`, req.query);
			request(req, res, next, newUrl, 'GET')
		} catch (error) {
			next(error)
		}
	}
	static getRecruitmentDetail(req, res, next) {
		const newUrl = `${ urlApi }/${ req.params.id }`;
		request(req, res, next, newUrl, 'GET' )
	}
}

module.exports = Controller;