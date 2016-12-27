'use strict';

var Pizza = require('./Pizza');

// ==============================
// ABSTRACT DECORATOR
// ==============================

var CustomPizza = function (pizza) {
    if (this.constructor === CustomPizza) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this._pizza = pizza;
}
CustomPizza.prototype = Object.create(Pizza.prototype);
CustomPizza.prototype.constructor = CustomPizza;

CustomPizza.prototype.ingredients = function () {
    return this._pizza.ingredients();
};

module.exports = CustomPizza;
