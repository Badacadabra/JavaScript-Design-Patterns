'use strict';

var Animal = require('./Animal');

// ==============================
// CONCRETE ANIMAL
// ==============================

var Dog = function () {};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.eat = function () {
    return "Dog: 'Meat, please!'\n";
};

module.exports = Dog;
