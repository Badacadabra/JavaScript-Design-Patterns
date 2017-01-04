'use strict';

// ==============================
// ANIMALS
// ==============================

var dog = {
    eat: function () {
        return "Dog: 'Meat, please!'\n";
    }
};

var rabbit = {
    eat: function () {
        return "Rabbit: 'A carrot would be great!'\n";
    }
};

module.exports = {
    dog: dog,
    rabbit: rabbit
};
