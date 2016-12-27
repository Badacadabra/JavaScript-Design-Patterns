'use strict';

var Lion = require('./API/Lion'),
    Crocodile = require('./API/Crocodile'),
    Gazelle = require('./API/Gazelle');

// ==============================
// CLIENT CODE
// ==============================

var lion = new Lion(),
    crocodile = new Crocodile(),
    gazelle = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
