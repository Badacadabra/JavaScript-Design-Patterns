// ==============================
// ABSTRACT COMPONENT
// ==============================

export default class Toy {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    description() {
        throw new Error("You cannot call an abstract method!");
    }
}
