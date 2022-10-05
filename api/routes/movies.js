const express = require("express");
const MoviesController = require("../controllers/movies");
const router = express.Router();


router.get("/", MoviesController.getAll);
router.get("/search", MoviesController.getSearch);
router.get("/single/:id", MoviesController.getOneMovie);


module.exports = router;