'use strict';

var Sauce = require('./Sauce');

// ==============================
// CONCRETE SAUCE
// ==============================

var Carbonara = function () {};
Carbonara.prototype = Object.create(Sauce.prototype);
Carbonara.prototype.constructor = Carbonara;

Carbonara.prototype.ingredients = function () {
    return "Carbonara (eggs, bacon, black pepper, grated cheese)";
};

module.exports = Carbonara;
