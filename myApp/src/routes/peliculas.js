var express = require("express");
var router = express.Router();
const controller = require("../controllers/moviesController");

router.get("/", controller.movies);
router.get("/detail/:id", controller.detail);
router.post("/create", controller.create);
router.put("/edit/:id", controller.edit);
router.delete("/delete/:id", controller.delete);
router.get("/search", controller.search);
router.get("/search/genero", controller.searchGenero);

module.exports = router;
