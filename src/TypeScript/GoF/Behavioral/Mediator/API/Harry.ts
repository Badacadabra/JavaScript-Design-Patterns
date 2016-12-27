import Mediator from './Mediator';
import Tom from './Tom';
import Dick from './Dick';
import Neighbor from './Neighbor';

// ==============================
// CONCRETE MEDIATOR 
// ==============================

export default class Harry implements Mediator {
    private tom: Tom = new Tom(this);
    private dick: Dick = new Dick(this);

    send(message: string, neighbor: Neighbor): string {
        if (neighbor instanceof Tom) {
            return this.dick.receive(message, "Tom");
        } else if (neighbor instanceof Dick) {
            return this.tom.receive(message, "Dick");
        } else {
            throw new Error("Unknown neighbor");
        }
    }
}
