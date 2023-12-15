const { Router } = require("express");
const router = Router();
const movieController = require("../controllers/movieController");

router.post("/create", movieController.createMovie);
router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getmovieById);
router.put("/movies/:id", movieController.updateMovieById);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;
