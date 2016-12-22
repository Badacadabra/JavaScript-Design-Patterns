// ==============================
// ABSTRACT OBSERVER 
// ==============================

interface Predator {
    attack(): string;
}

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

// ==============================
// CONCRETE OBSERVERS 
// ==============================

class Lion implements Predator {
    public attack(): string {
        return "Lion attack!\n";
    }
}

class Crocodile implements Predator {
    public attack(): string {
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

let lion: Predator = new Lion(),
    crocodile: Predator = new Crocodile(),
    gazelle: Prey = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
