import { Animal, dog, rabbit } from './animals';

// ==============================
// THE FACADE 
// ==============================

export interface HowToFeedAnimals {
    dog: Animal;
    rabbit: Animal;
    feedAnimals(): string;
}

export const facade: HowToFeedAnimals = {
    dog,
    rabbit,
    feedAnimals() {
        return `${this.dog.eat()}${this.rabbit.eat()}`;
    }
};
