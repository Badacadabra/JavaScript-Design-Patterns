'use strict';

var Predator = require('./Predator');

// ==============================
// CONCRETE OBSERVER
// ==============================

var Crocodile = function () {};
Crocodile.prototype = Object.create(Predator.prototype);
Crocodile.prototype.constructor = Crocodile;

Crocodile.prototype.attack = function () {
    return "Crocodile attack!\n";
};

module.exports = Crocodile;
