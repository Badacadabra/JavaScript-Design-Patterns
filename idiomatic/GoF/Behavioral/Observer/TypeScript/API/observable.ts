import { Predator } from './observers';

// ==============================
// OBSERVABLE (GAZELLE)
// ==============================

export interface Prey {
    predators: Predator[];
    addPredator(predator: Predator): void;
    notifyPredators(): string;
}

export const gazelle: Prey = {
    predators: [],
    addPredator(predator) {
        this.predators.push(predator); 
    },
    notifyPredators() {
        let situation = "";
        for (let predator of this.predators) {
            situation += predator.attack(); 
        }
        return situation;
    }
};
