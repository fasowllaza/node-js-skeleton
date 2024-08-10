const { verify } = require('../helpers/jwt');

async function authentication(req, res, next) {
	if (!req.headers.authorization) {
		next({ name: "Unauthorized", message: "Login First" });
	}
	else {
		const access_token = req.headers.authorization.split(' ')[1]
		const { id, role } = verify(access_token);
		req.user = {
			id,
			role
		};
		next();
	}
}

module.exports = authentication;