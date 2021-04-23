'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const moviesStore = require('../models/movies-store');

const movies = {
  index(request, response) {
    const moviesId = request.params.id;
    logger.debug('Movies id = ' + moviesId);
    const viewData = {
      title: 'Movies',
      movies: moviesStore.getMovies(moviesId),
    };
    response.render('movies', viewData);
  },
    deleteFilm(request, response) {
    const moviesId = request.params.id;
    const filmId = request.params.filmid;
    logger.debug(`Deleting Film ${filmId} from Movies ${moviesId}`);
    moviesStore.removeFilm(moviesId, filmId);
    response.redirect('/movies/' + moviesId);
  },
    addFilm(request, response) {
    const moviesId = request.params.id;
    const movies = moviesStore.getMovies(moviesId);
    const newFilm = {
      id: uuid(),
      title: request.body.title,
      director: request.body.director,
      genre: request.body.genre,
      duration: request.body.duration
    };
    moviesStore.addFilm(moviesId, newFilm);
    response.redirect('/movies/' + moviesId);
  },  
  updateFilm(request, response) {
    const moviesId = request.params.id;
    const filmId = request.params.filmid;
    logger.debug("updating film " + filmId);
    const updatedFilm = {
      title: request.body.title,
      director: request.body.director,
      genre: request.body.genre,
      duration: request.body.duration
    };
    moviesStore.editFilm(moviesId, filmId, updatedFilm);
    response.redirect('/movies/' + moviesId);
  },
  
  updateFilm(request, response) {
    const moviesId = request.params.id;
    const filmId = request.params.filmid;
    logger.debug("updating film " + filmId);
    const updatedFilm = {
      Film: request.body.Film,
      Director: request.body.Director,
      Genre: request.body.Genre,
      Duration: request.body.Duration
    };
    moviesStore.editFlim(moviesId, filmId, updatedFilm);
    response.redirect('/movies/' + moviesId);
  }
};

module.exports = movies;
