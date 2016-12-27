'use strict';

var Pizza = require('./Pizza');

// ==============================
// CONCRETE PIZZA
// ==============================

var Margherita = function () {};
Margherita.prototype = Object.create(Pizza.prototype);
Margherita.prototype.constructor = Margherita;

Margherita.prototype.ingredients = function () {
    return "- Tomatoes\n- Mozzarella\n";
};

module.exports = Margherita;
