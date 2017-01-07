'use strict';

var animals = require('./animals');

// ==============================
// THE FACADE 
// ==============================

module.exports = {
    dog: animals.dog,
    rabbit: animals.rabbit,
    feedAnimals: function () {
        return this.dog.eat() + this.rabbit.eat();
    }
};
