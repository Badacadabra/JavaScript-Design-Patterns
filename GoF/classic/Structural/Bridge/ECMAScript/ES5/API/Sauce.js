'use strict';

// ==============================
// ABSTRACTION
// ==============================

var Sauce = function () {
    if (this.constructor === Sauce) {
        throw new Error("You cannot instantiate an abstract class!");
    } 
}

Sauce.prototype.ingredients = function() {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Sauce;
