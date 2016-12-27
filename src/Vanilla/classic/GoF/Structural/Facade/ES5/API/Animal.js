'use strict';

// ==============================
// ABSTRACT ANIMAL
// ==============================

var Animal = function () {
    if (this.constructor === Animal) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Animal.prototype.eat = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Animal;
