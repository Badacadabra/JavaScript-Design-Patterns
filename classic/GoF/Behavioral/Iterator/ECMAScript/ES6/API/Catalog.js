// ==============================
// ABSTRACT ITERATOR 
// ==============================

export default class Catalog {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    hasNext() {
        throw new Error("You cannot call an abstract method!");
    }

    next() {
        throw new Error("You cannot call an abstract method!");
    }
}
