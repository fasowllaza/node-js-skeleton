const router = require('express').Router();
const recruitmentController = require('../controllers/recruitmentController');
const authentication = require('../middlewares/authentication');


router.use(authentication);
router.get('/getJob', recruitmentController.getRecruitment);
router.get('/getDetail/:id', recruitmentController.getRecruitmentDetail);

module.exports = router;