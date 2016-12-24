// ==============================
// ABSTRACT ANIMAL
// ==============================

class Animal {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    eat() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE ANIMALS
// ==============================

class Dog extends Animal {
    eat() {
        return "Dog: 'Meat, please!'\n";
    }
}

class Rabbit extends Animal {
    eat() {
        return "Rabbit: 'A carrot would be great!'\n";
    }
}

// ==============================
// THE FACADE 
// ==============================

class HowToFeedAnimals {
    constructor() {
        this._dog = new Dog();
        this._rabbit = new Rabbit();
    }

    feedAnimals() {
        return `${this._dog.eat()}${this._rabbit.eat()}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let facade = new HowToFeedAnimals();

console.log(facade.feedAnimals());
