const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

function sign(payload) {
	return jwt.sign(payload, "dans");
}

function verify(token) {
	return jwt.verify(token, "dans");
}

module.exports = { sign, verify };