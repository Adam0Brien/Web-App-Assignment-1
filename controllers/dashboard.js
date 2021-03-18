'use strict';

// import all required modules
const logger = require('../utils/logger');	
const uuid = require('uuid');

const moviesStore = require('../models/movies-Store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    	
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Movies App Dashboard',
      moviess: moviesStore.getAllMoviess(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.moviess);
    response.render('dashboard', viewData);
  },
  
  deleteMovies(request, response) {
    const moviesId = request.params.id;
    logger.debug(`Deleting Movies ${moviesId}`);
    moviesStore.removeMovies(moviesId);
    response.redirect('/dashboard');
  },
  
  addMovies(request, response) {
    const newMovies = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      songs: [],
    };
    moviesStore.addMovies(newMovies);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;
