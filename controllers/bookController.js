const {Books} = require("../models")

class Controller {
	static getBook(req, res, next) {
		Books.findAll().then((result) => {
			res.status(200).json(result);
		})
	}
	static getBookDetail(req, res, next) {
		const bookId = req.params.id;
		Books.findOne({
			where: { id: bookId }
		}).then((result) => {
			if (!result) {
				next({name: "ResourceNotFound", message: 'Books not found'})
			}
			res.status(200).json(result);
		}).catch((error) => next(error))
	}
}

module.exports = Controller;