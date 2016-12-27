'use strict';

// ==============================
// ABSTRACT PIZZA
// ==============================

var Pizza = function () {
    if (this.constructor === Pizza) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Pizza.prototype.ingredients = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Pizza;
