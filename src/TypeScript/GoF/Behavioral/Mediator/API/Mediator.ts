import Neighbor from './Neighbor';

// ==============================
// ABSTRACT MEDIATOR
// ==============================

export default interface Mediator {
    send(message: string, neighbor: Neighbor): string;
}
