// ==============================
// ABSTRACT OBSERVER 
// ==============================

class Predator {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    attack() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// ABSTRACT OBSERVABLE 
// ==============================

class Prey {
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

// ==============================
// CONCRETE OBSERVERS 
// ==============================

class Lion extends Predator {
    attack() {
        return "Lion attack!\n";
    }
}

class Crocodile extends Predator {
    attack() {
        return "Crocodile attack!\n";
    }
}

// ==============================
// CONCRETE OBSERVABLES
// ==============================

class Gazelle extends Prey {
    constructor() {
        super(); 
    }
}

// ==============================
// CLIENT CODE
// ==============================

let lion = new Lion(),
    crocodile = new Crocodile(),
    gazelle = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
