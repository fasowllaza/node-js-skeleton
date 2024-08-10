async function authorization(req, res, next) {
    if (req.user && req.user.role) {
        if (req.user.role === 'admin') {
            return next();
        } else {
            return next({ name: "Unauthorized", message: "Not authorized to access this resource" });
        }
    } else {
        return next({ name: "Unauthorized", message: "Not authorized to access this resource" });
    }
}

module.exports = authorization;
