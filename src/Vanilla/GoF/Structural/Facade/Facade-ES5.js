'use strict';

// ==============================
// ABSTRACT ANIMAL
// ==============================

var Animal = (function () {
    function Animal() {
        if (this.constructor === Animal) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Animal.prototype.eat = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Animal;
})();

// ==============================
// CONCRETE ANIMALS
// ==============================

var Dog = (function () {
    function Dog() {}
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    Dog.prototype.eat = function () {
        return "Dog: 'Meat, please!'\n";
    };

    return Dog;
})();

var Rabbit = (function () {
    function Rabbit() {}
    Rabbit.prototype = Object.create(Animal.prototype);
    Rabbit.prototype.constructor = Rabbit;

    Rabbit.prototype.eat = function () {
        return "Rabbit: 'A carrot would be great!'\n";
    };

    return Rabbit;
})();

// ==============================
// THE FACADE 
// ==============================

var HowToFeedAnimals = (function () {
    var dog = new Dog(),
        rabbit = new Rabbit();

    function HowToFeedAnimals() {}

    HowToFeedAnimals.prototype.feedAnimals = function () {
        return dog.eat() + rabbit.eat();
    };

    return HowToFeedAnimals;
})();

// ==============================
// CLIENT CODE
// ==============================

var facade = new HowToFeedAnimals();

console.log(facade.feedAnimals());
