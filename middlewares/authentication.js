const { verify } = require('../helpers/jwt');

async function authentication(req, res, next) {
	if (!req.headers.access_token) {
		next({ name: "Unauthorized", message: "Login First" });
	}
	else {
		let decoded = verify(req.headers.access_token);
		req.user = {
			id: decoded.id,
			username: decoded.username
		};
		next();
	}
}

module.exports = authentication;