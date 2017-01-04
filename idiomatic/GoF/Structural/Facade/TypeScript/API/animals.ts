// ==============================
// ANIMALS
// ==============================

export interface Animal {
    eat(): string;
}

export const dog: Animal = {
    eat() {
        return "Dog: 'Meat, please!'\n";
    }
};

export const rabbit: Animal = {
    eat() {
        return "Rabbit: 'A carrot would be great!'\n";
    }
};
