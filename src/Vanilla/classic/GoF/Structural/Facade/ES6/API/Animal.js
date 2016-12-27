// ==============================
// ABSTRACT ANIMAL
// ==============================

export default class Animal {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    eat() {
        throw new Error("You cannot call an abstract method!");
    }
}
