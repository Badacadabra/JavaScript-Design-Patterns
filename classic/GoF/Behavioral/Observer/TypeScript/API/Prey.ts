import Predator from './Predator';

// ==============================
// ABSTRACT OBSERVABLE 
// ==============================

abstract class Prey {
    protected predators: Predator[] = [];

    public addPredator(predator: Predator): void {
        this.predators.push(predator);
    }

    public notifyPredators(): string {
        let situation: string = "";
        for (let predator of this.predators) {
            situation += predator.attack(); 
        }
        return situation;
    }
}

export default Prey;
