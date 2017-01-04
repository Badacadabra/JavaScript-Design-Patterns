// ==============================
// OBSERVERS 
// ==============================

const lion = {
    attack() {
        return "Lion attack!\n"; 
    }
};

const crocodile = {
    attack() {
        return "Crocodile attack!\n"; 
    }
};

// ==============================
// OBSERVABLE
// ==============================

const gazelle = {
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
