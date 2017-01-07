'use strict';

var Sauce = require('./Sauce');

// ==============================
// CONCRETE SAUCE
// ==============================

var Pesto = function () {};
Pesto.prototype = Object.create(Sauce.prototype);
Pesto.prototype.constructor = Pesto;

Pesto.prototype.ingredients = function () {
    return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
};

module.exports = Pesto;
