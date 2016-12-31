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

// ==============================
// THE FACADE 
// ==============================

var facade = {
    dog: dog,
    rabbit: rabbit,
    feedAnimals: function () {
        return this.dog.eat() + this.rabbit.eat();
    }
};

// ==============================
// TEST
// ==============================

console.log(facade.feedAnimals());
