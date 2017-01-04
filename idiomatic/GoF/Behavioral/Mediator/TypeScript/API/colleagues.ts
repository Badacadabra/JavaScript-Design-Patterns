import { Mediator } from './mediator';

// ==============================
// COLLEAGUES (NEIGHBORS)
// ==============================

export interface Neighbor {
    name: string;
    send(message: string, mediator: Mediator): string;
    receive(message: string, sender: string): string;
}

const neighbor: (name: string) => Neighbor = function (name: string): Neighbor {
    return {
        name: name,
        send(message, mediator) {
            return mediator.send(message, this);
        },
        receive(message, sender) {
            return `[${this.name}] Message from ${sender}: '${message}'\n`;
        }
    }
};

export const tom: Neighbor = neighbor("Tom");
export const dick: Neighbor = neighbor("Dick");
