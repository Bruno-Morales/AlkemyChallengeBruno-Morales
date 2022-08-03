var express = require('express');
var router = express.Router();
const controller = require("../controllers/authController")


router.post('/register', controller.authpost);
router.post('/login/:id', controller.authlogin);
router.put('/edit/:id', controller.edit);
router.delete('/delete/:id', controller.delete);
router.get('/detalle/:id', controller.detalle);
router.get('/search', controller.search);
router.get('/search/edad', controller.searchEdad);
router.get('/search/id', controller.searchId);


module.exports = router;
