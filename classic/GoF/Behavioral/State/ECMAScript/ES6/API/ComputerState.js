// ==============================
// ABSTRACT STATE
// ==============================

export default class ComputerState {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    power(pc) {
        throw new Error("You cannot call an abstract method!");
    }
}
