'use strict';

var Predator = require('./Predator');

// ==============================
// CONCRETE OBSERVER
// ==============================

var Lion = function () {};
Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;

Lion.prototype.attack = function () {
    return "Lion attack!\n";
};

module.exports = Lion;
