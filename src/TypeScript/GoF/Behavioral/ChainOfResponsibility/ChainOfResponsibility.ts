// ==============================
// ABSTRACT RACER 
// ==============================

abstract class Racer {
    protected nextRelay: Racer;

    public go(): string {
        var res = "";
        if (this.nextRelay === undefined) {
            res += "";
        } else {
            res += this.nextRelay.go();
        }
        return res;
    }

    public setNextRelay(relay: Racer): void {
        this.nextRelay = relay;
    }
}

// ==============================
// CONCRETE RACERS
// ==============================

class Walker extends Racer {
    public go(): string {
        return `Walker: go!\n${super.go()}`;
    }
}

class Runner extends Racer {
    public go(): string {
        return `Runner: go!\n${super.go()}`;
    }
}

class Swimmer extends Racer {
    public go(): string {
        return `Swimmer: go!\n${super.go()}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let walker: Racer = new Walker(),
    runner: Racer = new Runner(),
    swimmer: Racer = new Swimmer();

walker.setNextRelay(runner);
runner.setNextRelay(swimmer);

console.log(walker.go());
