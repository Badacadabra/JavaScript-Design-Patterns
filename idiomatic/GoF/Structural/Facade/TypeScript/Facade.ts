// ==============================
// ANIMALS
// ==============================

interface Animal {
    eat(): string;
}

const dog: Animal = {
    eat() {
        return "Dog: 'Meat, please!'\n";
    }
};

const rabbit: Animal = {
    eat() {
        return "Rabbit: 'A carrot would be great!'\n";
    }
};

// ==============================
// THE FACADE 
// ==============================

interface HowToFeedAnimals {
    dog: Animal;
    rabbit: Animal;
    feedAnimals(): string;
}

const facade: HowToFeedAnimals = {
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
