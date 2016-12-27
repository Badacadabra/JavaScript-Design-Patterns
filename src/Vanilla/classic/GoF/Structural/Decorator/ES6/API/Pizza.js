// ==============================
// ABSTRACT PIZZA
// ==============================

export default class Pizza {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    ingredients() {
        throw new Error("You cannot call an abstract method!");
    }
}
