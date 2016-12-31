import Animal from './Animal';

// ==============================
// CONCRETE ANIMAL
// ==============================

export default class Dog implements Animal {
    public eat(): string {
        return "Dog: 'Meat, please!'\n";
    }
}
