const router = require('express').Router();
const userRoute = require('./userRoute');
const recruitmentRoute = require('./recruitmentRoute');
const museumRoute = require('./museumRoute');

router.use("/user", userRoute);
router.use("/recruitment", recruitmentRoute);
router.use("/museum", museumRoute);

module.exports = router;