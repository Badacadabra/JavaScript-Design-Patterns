'use strict';

var HowToFeedAnimals = require('./API/HowToFeedAnimals');

// ==============================
// CLIENT CODE
// ==============================

var facade = new HowToFeedAnimals();

console.log(facade.feedAnimals());
