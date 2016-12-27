import Neighbor from './Neighbor';
import Mediator from './Mediator';

// ==============================
// CONCRETE COLLEAGUES (NEIGHBORS)
// ==============================

export default class Dick extends Neighbor {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: string): string {
        return this.mediator.send(message, this);
    }

    receive(message: string, sender: string): string {
        return `[Dick] Message from ${sender}: '${message}'\n`;
    }
}
