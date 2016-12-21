// ==============================
// ABSTRACT RACER 
// ==============================

class Racer {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    go() {
        let res = "";
        if (this.nextRelay === undefined) {
            res += "";
        } else {
            res += this.nextRelay.go();
        }
        return res;
    }

    setNextRelay(relay) {
        this.nextRelay = relay;
    }
}

// ==============================
// CONCRETE RACERS
// ==============================

class Walker extends Racer {
    go() {
        return `Walker: go!\n${super.go()}`;
    }
}

class Runner extends Racer {
    go() {
        return `Runner: go!\n${super.go()}`;
    }
}

class Swimmer extends Racer {
    go() {
        return `Swimmer: go!\n${super.go()}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let walker = new Walker(),
    runner = new Runner(),
    swimmer = new Swimmer();

walker.setNextRelay(runner);
runner.setNextRelay(swimmer);

console.log(walker.go());
