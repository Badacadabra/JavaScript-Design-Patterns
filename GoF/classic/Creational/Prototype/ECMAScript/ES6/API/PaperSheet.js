// ==============================
// ABSTRACT PROTOTYPE
// ==============================

export default class PaperSheet {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    photocopy() { // clone method
        throw new Error("You cannot call an abstract method!");
    }
}

