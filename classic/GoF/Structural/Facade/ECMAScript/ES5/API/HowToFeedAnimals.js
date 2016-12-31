'use strict';

var Dog = require('./Dog'),
    Rabbit = require('./Rabbit');

// ==============================
// THE FACADE 
// ==============================

var HowToFeedAnimals, dog, rabbit;

HowToFeedAnimals = function () {};

dog = new Dog(),
rabbit = new Rabbit();

HowToFeedAnimals.prototype.feedAnimals = function () {
    return dog.eat() + rabbit.eat();
};

module.exports = HowToFeedAnimals;
