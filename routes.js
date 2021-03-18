'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const movies = require('./controllers/movies.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/movies/:id', movies.index);

router.get('/movies/:id/deleteFilm/:filmid', movies.deleteFilm);
router.post('/movies/:id/addfilm', movies.addFilm);

router.get('/dashboard/deletemovies/:id', dashboard.deleteMovies);
router.post('/dashboard/addmovies', dashboard.addMovies);

// export router module
module.exports = router;

