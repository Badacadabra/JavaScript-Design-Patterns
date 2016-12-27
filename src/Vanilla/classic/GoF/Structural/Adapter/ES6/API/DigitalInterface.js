// ==============================
// ABSTRACT CONNECTION
// ==============================

export default class DigitalInterface {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleDigitalSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}
