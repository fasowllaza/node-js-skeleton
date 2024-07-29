const router = require('express').Router();
const museumController = require("../controllers/museumController");


router.get('/list', museumController.getMuseumList);

module.exports = router;