// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

export default class Neighbor {
    constructor(mediator) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._mediator = mediator;
    }

    send(message) {
        throw new Error("You cannot instantiate an abstract class!");
    }

    receive(message, sender) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}
