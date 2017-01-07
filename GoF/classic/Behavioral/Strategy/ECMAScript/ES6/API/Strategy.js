// ==============================
// ABSTRACT STRATEGY 
// ==============================

export default class Strategy {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    fight() {
        throw new Error("You cannot call an abstract method!");
    }
}
