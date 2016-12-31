// ==============================
// ABSTRACT CONNECTION
// ==============================

export default class AnalogInterface {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleAnalogSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}
