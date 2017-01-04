// ==============================
// RACERS
// ==============================

interface Racer {
    nextRelay?: Racer;
    go(): string;
}

const walker: Racer = {
    go() {
        return `Walker: go!
${go(this.nextRelay)}`;
    }
};

const runner: Racer = {
    go() {
        return `Runner: go!
${go(this.nextRelay)}`;
    }
};

const swimmer: Racer = {
    go() {
        return `Swimmer: go!
${go(this.nextRelay)}`;
    }
};

// ==============================
// REQUEST (START)
// ==============================

const go: (nextRelay: Racer) => string = function (nextRelay: Racer): string {
    let res = "";
    if (nextRelay === undefined) {
        res += "";
    } else {
        res += nextRelay.go();
    }
    return res;
};

// ==============================
// TEST 
// ==============================

walker.nextRelay = runner;
runner.nextRelay = swimmer;

console.log(walker.go());
