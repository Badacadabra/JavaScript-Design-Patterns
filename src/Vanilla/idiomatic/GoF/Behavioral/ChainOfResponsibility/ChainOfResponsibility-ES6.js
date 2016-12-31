// ==============================
// RACERS
// ==============================

const walker = {
    go() {
        return `Walker: go!
${go(this.nextRelay)}`;
    }
};

const runner = {
    go() {
        return `Runner: go!
${go(this.nextRelay)}`;
    }
};

const swimmer = {
    go() {
        return `Swimmer: go!
${go(this.nextRelay)}`;
    }
};

// ==============================
// REQUEST (START)
// ==============================

const go = nextRelay => {
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
