
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: String,
    director: String,
    releaseDate: String,
    genre: String,
    oscars: Number,
});

const Movie = mongoose.model("Movie", moviesSchema, "movies");

module.exports = Movie;