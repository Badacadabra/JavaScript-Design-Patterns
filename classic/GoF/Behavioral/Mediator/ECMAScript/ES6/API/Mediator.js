// ==============================
// ABSTRACT MEDIATOR
// ==============================

export default class Mediator {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    send(message, neighbor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}
