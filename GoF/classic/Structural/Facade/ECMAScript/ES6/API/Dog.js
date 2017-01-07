import Animal from './Animal';

// ==============================
// CONCRETE ANIMAL
// ==============================

export default class Dog extends Animal {
    eat() {
        return "Dog: 'Meat, please!'\n";
    }
}
