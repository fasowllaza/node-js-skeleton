const router = require('express').Router();
const bookController = require('../controllers/bookController');
const authentication = require('../middlewares/authentication');


router.use(authentication);
router.get('/', bookController.getBook);
router.get('/:id', bookController.getBookDetail);

module.exports = router;