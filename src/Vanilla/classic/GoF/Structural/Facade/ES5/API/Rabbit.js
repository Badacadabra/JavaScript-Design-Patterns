'use strict';

var Animal = require('./Animal');

// ==============================
// CONCRETE ANIMAL
// ==============================

var Rabbit = function () {};
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.eat = function () {
    return "Rabbit: 'A carrot would be great!'\n";
};

module.exports = Rabbit;
