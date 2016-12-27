// ==============================
// ABSTRACT OBSERVER 
// ==============================

export default class Predator {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    attack() {
        throw new Error("You cannot call an abstract method!");
    }
}
