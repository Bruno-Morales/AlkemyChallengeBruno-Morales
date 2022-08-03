var express = require('express');
var router = express.Router();
const controller = require("../controllers/usersController")


router.get('/', controller.users);

module.exports = router;
