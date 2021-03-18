'use strict';

const characterStore = {

  characters: require('./character-store.json').characters,

  getAllCharacters() {
    return this.characters;
  },

};

module.exports = characterStore;
