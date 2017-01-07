// ==============================
// ABSTRACTION
// ==============================

export default class Sauce {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot call an abstract method!");
        }
    }

    ingredients() {
        throw new Error("You cannot call an abstract method!");
    }
}
