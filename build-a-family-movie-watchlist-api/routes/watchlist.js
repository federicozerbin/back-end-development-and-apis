import express from "express";
import {authenticate} from "../middleware/authenticate.js";
import {authorizeModification} from "../middleware/authorize.js";
import {
  getWatchlist,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../utils/db.js"; 

const router = express.Router();

router.get("/:userId", authenticate, (req, res) => {
  const userId = Number(req.params.userId);
  const watchlist = getWatchlist(userId);

  if (watchlist === null) {
    return res.status(404).json({ error: "Utente non trovato" });
  }

  res.json(watchlist);
});

router.post("/:userId/movies", authenticate, authorizeModification, (req, res) => {
  const userId = Number(req.params.userId);
  const { title, genre } = req.body ?? [];

  if (!title || !genre) {
    return res.status(400).json({ "error": "Title and genre are required" });
  }

  const movie = addMovie(userId, { title, genre });

  if (movie === null) return res.status(404).json({ "error": "user not found" });


  res.status(201).json(movie);
});


router.put("/:userId/movies/:movieId", authenticate, authorizeModification, (req, res) => {

  const userId = Number(req.params.userId);
  const movieId = Number(req.params.movieId);

  const movie = updateMovie(userId, movieId, req.body);

  if (movie === null) {
    return res.status(404).json({ "error": "user or movie not found" });
  }

  res.json(movie);
});


router.delete("/:userId/movies/:movieId", authenticate, authorizeModification, (req, res) => {
  const userId = Number(req.params.userId);
  const movieId = Number(req.params.movieId);

  const deleted = deleteMovie(userId, movieId);

  if (!deleted) {
    return res.status(404).json({ "error": "user or movie not found" });
  }

  res.status(200).json({ "message": "Movie deleted" });
});

export default router;