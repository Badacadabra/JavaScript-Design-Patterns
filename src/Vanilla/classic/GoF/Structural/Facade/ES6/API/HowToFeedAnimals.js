import Dog from './Dog';
import Rabbit from './Rabbit';

// ==============================
// THE FACADE 
// ==============================

export default class HowToFeedAnimals {
    constructor() {
        this._dog = new Dog();
        this._rabbit = new Rabbit();
    }

    feedAnimals() {
        return `${this._dog.eat()}${this._rabbit.eat()}`;
    }
}
