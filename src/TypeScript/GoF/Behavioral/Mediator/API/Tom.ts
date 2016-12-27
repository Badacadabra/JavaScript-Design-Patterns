import Neighbor from './Neighbor';
import Mediator from './Mediator';

// ==============================
// CONCRETE COLLEAGUE (NEIGHBOR)
// ==============================

export default class Tom extends Neighbor {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: string): string {
        return this.mediator.send(message, this);
    }

    receive(message: string, sender: string): string {
        return `[Tom] Message from ${sender}: '${message}'\n`;
    }
}
