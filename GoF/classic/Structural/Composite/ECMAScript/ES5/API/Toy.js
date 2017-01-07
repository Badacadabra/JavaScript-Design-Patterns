'use strict';

// ==============================
// ABSTRACT COMPONENT
// ==============================

var Toy = function () {
    if (this.constructor === Toy) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Toy.prototype.description = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Toy;
