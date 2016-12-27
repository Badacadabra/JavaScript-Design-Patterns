import Dog from './Dog';
import Rabbit from './Rabbit';

// ==============================
// THE FACADE 
// ==============================

export default class HowToFeedAnimals {
    private dog: Dog = new Dog();
    private rabbit: Rabbit = new Rabbit();

    public feedAnimals(): string {
        return `${this.dog.eat()}${this.rabbit.eat()}`;
    }
}
