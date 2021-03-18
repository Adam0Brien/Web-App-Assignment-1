'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const moviesStore = {
	
  store: new JsonStore('./models/movies-Store.json', { moviesCollection: [] }),
  collection: 'moviesCollection',

  getAllMovies() {
    return this.store.findAll(this.collection);
  },

  getMovies(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
//
  addMovies(movies) {
    this.store.add(this.collection, movies);
  },

  removeMovies(id) {
    const movies = this.getMovies(id);
    this.store.remove(this.collection, movies);
  },
  
  removeAllMovies() {
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
};

module.exports = moviesStore;
