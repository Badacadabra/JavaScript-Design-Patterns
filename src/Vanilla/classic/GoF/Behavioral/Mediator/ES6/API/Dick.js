import Neighbor from './Neighbor';

// ==============================
// CONCRETE COLLEAGUE (NEIGHBOR)
// ==============================

export default class Dick extends Neighbor {
    constructor(mediator) {
        super(mediator);
    }

    send(message) {
        return this._mediator.send(message, this);
    }

    receive(message, sender) {
        return `[Dick] Message from ${sender}: '${message}'\n`;
    }
}
