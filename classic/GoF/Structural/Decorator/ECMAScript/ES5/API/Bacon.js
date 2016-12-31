'use strict';

var CustomPizza = require('./CustomPizza');

// ==============================
// CONCRETE DECORATOR (INGREDIENT)
// ==============================

var Bacon = function (pizza) {
    CustomPizza.call(this, pizza);
}
Bacon.prototype = Object.create(CustomPizza.prototype);
Bacon.prototype.constructor = Bacon;

Bacon.prototype.ingredients = function () {
    return this._pizza.ingredients() + "- Bacon\n";
};

module.exports = Bacon;
