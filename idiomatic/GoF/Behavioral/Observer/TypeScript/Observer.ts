// ==============================
// OBSERVERS 
// ==============================

interface Predator {
    attack(): string;
}

const lion: Predator = {
    attack() {
        return "Lion attack!\n"; 
    }
};

const crocodile: Predator = {
    attack() {
        return "Crocodile attack!\n"; 
    }
};

// ==============================
// OBSERVABLE
// ==============================

interface Prey {
    predators: Predator[];
    addPredator(predator: Predator): void;
    notifyPredators(): string;
}

const gazelle: Prey = {
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

// ==============================
// TEST 
// ==============================

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
