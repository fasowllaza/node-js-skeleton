const router = require('express').Router();
const museumController = require("../controllers/museumController");


router.get('/list', museumController.getMuseumList);
router.get('/:id', museumController.getMuseumDetail);


module.exports = router;