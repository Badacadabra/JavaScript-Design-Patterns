// ==============================
// ABSTRACT ANIMAL
// ==============================

interface Animal {
    eat(): string;
}

// ==============================
// CONCRETE ANIMALS
// ==============================

class Dog implements Animal {
    public eat(): string {
        return "Dog: 'Meat, please!'\n";
    }
}

class Rabbit implements Animal {
    public eat(): string {
        return "Rabbit: 'A carrot would be great!'\n";
    }
}

// ==============================
// THE FACADE 
// ==============================

class HowToFeedAnimals {
    private dog: Dog = new Dog();
    private rabbit: Rabbit = new Rabbit();

    public feedAnimals(): string {
        return `${this.dog.eat()}${this.rabbit.eat()}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let facade: HowToFeedAnimals = new HowToFeedAnimals();

console.log(facade.feedAnimals());
