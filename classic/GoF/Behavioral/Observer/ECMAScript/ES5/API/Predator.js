'use strict';

// ==============================
// ABSTRACT OBSERVER 
// ==============================

var Predator = function() {
    if (this.constructor === Predator) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Predator.prototype.attack = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Predator;
