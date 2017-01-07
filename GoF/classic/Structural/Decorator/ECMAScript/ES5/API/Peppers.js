'use strict';

var CustomPizza = require('./CustomPizza');

// ==============================
// CONCRETE DECORATOR (INGREDIENT)
// ==============================

var Peppers = function (pizza) {
    CustomPizza.call(this, pizza);
}
Peppers.prototype = Object.create(CustomPizza.prototype);
Peppers.prototype.constructor = Peppers;

Peppers.prototype.ingredients = function () {
    return this._pizza.ingredients() + "- Peppers\n";
};

module.exports = Peppers;
