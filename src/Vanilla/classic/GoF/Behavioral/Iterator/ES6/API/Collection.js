// ==============================
// ABSTRACT ITERABLE 
// ==============================

export default class Collection {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    list() {
        throw new Error("You cannot call an abstract method!");
    }
}
