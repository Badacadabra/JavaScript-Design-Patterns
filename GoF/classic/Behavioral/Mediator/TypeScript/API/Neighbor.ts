import Mediator from './Mediator';

// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

abstract class Neighbor {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public abstract send(message: string): string;
    public abstract receive(message: string, sender: string): string;
}

export default Neighbor;
