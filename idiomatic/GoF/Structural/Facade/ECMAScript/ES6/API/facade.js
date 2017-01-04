import { dog, rabbit } from './animals';

// ==============================
// THE FACADE 
// ==============================

export default {
    dog,
    rabbit,
    feedAnimals() {
        return `${this.dog.eat()}${this.rabbit.eat()}`;
    }
};
