'use strict';

var Prey = require('./Prey');

// ==============================
// CONCRETE OBSERVABLE
// ==============================

var Gazelle = function () {
    Prey.call(this);
}
Gazelle.prototype = Object.create(Prey.prototype);
Gazelle.prototype.constructor = Gazelle;

module.exports = Gazelle;
