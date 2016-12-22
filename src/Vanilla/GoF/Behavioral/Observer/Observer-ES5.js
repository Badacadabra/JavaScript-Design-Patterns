'use strict';

// ==============================
// ABSTRACT OBSERVER 
// ==============================

var Predator = (function() {
    function Predator() {
        if (this.constructor === Predator) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Predator.prototype.attack = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Predator;
})();

// ==============================
// ABSTRACT OBSERVABLE 
// ==============================

var Prey = (function () {
    function Prey() {
        if (this.constructor === Prey) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._predators = [];
    }

    Prey.prototype.addPredator = function (predator) {
        this._predators.push(predator);
    };

    Prey.prototype.notifyPredators = function () {
        var situation = "";
        for (var i = 0, len = this._predators.length; i < len; i++) {
            situation += this._predators[i].attack(); 
        }
        return situation;
    };

    return Prey;
})();

// ==============================
// CONCRETE OBSERVERS 
// ==============================

var Lion = (function () {
    function Lion() {}
    Lion.prototype = Object.create(Predator.prototype);
    Lion.prototype.constructor = Lion;

    Lion.prototype.attack = function () {
        return "Lion attack!\n";
    };

    return Lion;
})();

var Crocodile = (function () {
    function Crocodile() {}
    Crocodile.prototype = Object.create(Predator.prototype);
    Crocodile.prototype.constructor = Crocodile;

    Crocodile.prototype.attack = function () {
        return "Crocodile attack!\n";
    };

    return Crocodile;
})();

// ==============================
// CONCRETE OBSERVABLES
// ==============================

var Gazelle = (function () {
    function Gazelle() {
        Prey.call(this);
    }
    Gazelle.prototype = Object.create(Prey.prototype);
    Gazelle.prototype.constructor = Gazelle;

    return Gazelle;
})();

// ==============================
// CLIENT CODE
// ==============================

var lion = new Lion(),
    crocodile = new Crocodile(),
    gazelle = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
