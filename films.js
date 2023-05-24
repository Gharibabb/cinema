// backend/routes/films.js
const express = require('express');
const router = express.Router();
const Film = require('../models/film');

// Obtenir la liste des films
router.get('/films', async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtenir les détails d'un film spécifique
router.get('/films/:id', getFilm, (req, res) => {
  res.json(res.film);
});

// Middleware pour récupérer un film par son ID
async function getFilm(req, res, next) {
  let film;
  try {
    film = await Film.findById(req.params.id);
    if (film === null) {
      return res.status(404).json({ message: 'Film introuvable' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.film = film;
  next();
}

module.exports = router;
