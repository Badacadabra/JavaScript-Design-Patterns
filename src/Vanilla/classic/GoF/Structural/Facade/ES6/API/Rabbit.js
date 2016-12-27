import Animal from './Animal';

// ==============================
// CONCRETE ANIMAL
// ==============================

export default class Rabbit extends Animal {
    eat() {
        return "Rabbit: 'A carrot would be great!'\n";
    }
}
