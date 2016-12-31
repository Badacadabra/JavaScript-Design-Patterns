// ==============================
// ABSTRACT OBSERVABLE 
// ==============================

export default class Prey {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._predators = [];
    }

    addPredator(predator) {
        this._predators.push(predator);
    }

    notifyPredators() {
        let situation = "";
        for (let predator of this._predators) {
            situation += predator.attack(); 
        }
        return situation;
    }
}
