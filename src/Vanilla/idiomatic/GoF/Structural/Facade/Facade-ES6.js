// ==============================
// ANIMALS
// ==============================

const dog = {
    eat() {
        return "Dog: 'Meat, please!'\n";
    }
};

const rabbit = {
    eat() {
        return "Rabbit: 'A carrot would be great!'\n";
    }
};

// ==============================
// THE FACADE 
// ==============================

const facade = {
    dog: dog,
    rabbit: rabbit,
    feedAnimals() {
        return `${this.dog.eat()}${this.rabbit.eat()}`;
    }
};

// ==============================
// TEST
// ==============================

console.log(facade.feedAnimals());
