import Animal from './Animal';

// ==============================
// CONCRETE ANIMAL
// ==============================

export default class Rabbit implements Animal {
    public eat(): string {
        return "Rabbit: 'A carrot would be great!'\n";
    }
}
