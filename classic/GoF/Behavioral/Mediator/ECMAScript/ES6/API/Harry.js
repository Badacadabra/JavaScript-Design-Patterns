import Mediator from './Mediator';
import Tom from './Tom';
import Dick from './Dick';

// ==============================
// CONCRETE MEDIATOR 
// ==============================

export default class Harry extends Mediator {
    constructor() {
        super();
        this._tom = new Tom(this),
        this._dick = new Dick(this);
    }

    send(message, neighbor) {
        if (neighbor instanceof Tom) {
            return this._dick.receive(message, "Tom");
        } else if (neighbor instanceof Dick) {
            return this._tom.receive(message, "Dick");
        } else {
            throw new Error("Unknown neighbor");
        }
    }
}
