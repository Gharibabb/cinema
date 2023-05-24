// backend/models/film.js
const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  acteursPrincipaux: {
    type: [String],
    required: true,
  },
  realisateur: {
    type: String,
    required: true,
  },
});

const Film = mongoose.model('Films', filmSchema,"films");

module.exports = Film;
