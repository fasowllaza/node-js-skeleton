const router = require('express').Router();
const userRoute = require('./userRoute');
const bookRoute = require('./bookRoute');
const borrowRoute = require('./borrowRoute');

router.use("/users", userRoute);
router.use("/books", bookRoute);
router.use("/borrows", borrowRoute);

module.exports = router;