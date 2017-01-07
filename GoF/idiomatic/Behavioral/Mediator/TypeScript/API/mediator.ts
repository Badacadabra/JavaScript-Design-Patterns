import { Neighbor, tom, dick } from './colleagues';

// ==============================
// MEDIATOR 
// ==============================

export interface Mediator {
    tom: Neighbor;
    dick: Neighbor;
    send(message: string, neighbor: Neighbor): string;
}

export const harry: Mediator = {
    tom,
    dick,
    send(message, neighbor) {
        if (neighbor.name === "Tom") {
            return this.dick.receive(message, "Tom");
        } else if (neighbor.name === "Dick") {
            return this.tom.receive(message, "Dick");
        } else {
            throw {
                type: "Not found",
                message: "The given person has not been found in the neighborhood."
            } 
        }
    }
};
