const router = require('express').Router();
const userRoute = require('./userRoute');
const recruitmentRoute = require('./recruitmentRoute');

router.use("/user", userRoute);
router.use("/recruitment", recruitmentRoute);

module.exports = router;