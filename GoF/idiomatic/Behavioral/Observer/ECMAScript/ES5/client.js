'use strict';

var predators = require('./API/observers'),
    gazelle = require('./API/observable');

// ==============================
// CLIENT CODE 
// ==============================

gazelle.addPredator(predators.lion);
gazelle.addPredator(predators.crocodile);

console.log(gazelle.notifyPredators());
