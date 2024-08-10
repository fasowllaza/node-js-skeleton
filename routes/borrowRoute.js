const router = require('express').Router();
const borrowController = require('../controllers/borrowController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');


router.use(authentication);
router.get('/', borrowController.getBorrow);
router.get('/detail/:id', borrowController.getBorrowDetail);
router.use(authorization)
router.post('/', borrowController.addBorrow);
router.put('/:id', borrowController.returnBorrow);
router.get('/lateList', borrowController.getLateList);


module.exports = router;