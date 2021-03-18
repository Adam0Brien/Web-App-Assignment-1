'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const moviesStore = {

  store: new JsonStore('./models/movies-store.json', { moviesCollection: [] }),
  collection: 'moviesCollection',

  getAllMoviess() {
    return this.store.findAll(this.collection);
  },

  getMovies(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addMovies(movies) {
    this.store.add(this.collection, movies);
  },

  removeMovies(id) {
    const movies = this.getMovies(id);
    this.store.remove(this.collection, movies);
  },

  removeAllMoviess() {
    this.store.removeAll(this.collection);
  },

  addFilm(id, film) {
    const movies = this.getMovies(id);
    movies.films.push(film);
  },

  removeFilm(id, filmId) {
    const movies = this.getMovies(id);
    const films = movies.films;
    _.remove(films, { id: filmId});
  },
  
  editFilm(id, filmId, updatedFilm) {
    const movies = this.getMovies(id);
    const films = movies.films;
    const index = films.findIndex(film => film.id === filmId);
    films[index].title = updatedFilm.title;
    films[index].artist = updatedFilm.artist;
    films[index].genre = updatedFilm.genre;
    films[index].duration = updatedFilm.duration;
  }
};

module.exports = moviesStore;
