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
    logger.info('about to render', viewData.movies);
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
      artist: request.body.artist,
      genre: request.body.genre,
      duration: request.body.duration
    };
    moviesStore.addFilm(moviesId, newFilm);
    response.redirect('/movies/' + moviesId);
  },
};

module.exports = movies;
