'use strict';

// ==============================
// OBSERVERS 
// ==============================

var lion = {
    attack: function () {
        return "Lion attack!\n"; 
    }
};

var crocodile = {
    attack: function () {
        return "Crocodile attack!\n"; 
    }
};

// ==============================
// OBSERVABLE
// ==============================

var gazelle = {
    predators: [],
    addPredator: function (predator) {
        this.predators.push(predator); 
    },
    notifyPredators: function () {
        var situation = "";
        for (var i = 0, len = this.predators.length; i < len; i++) {
            situation += this.predators[i].attack(); 
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
