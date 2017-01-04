// ==============================
// GO GO GO! 
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
// RACERS
// ==============================

export const walker = {
    go() {
        return `Walker: go!
${go(this.nextRelay)}`;
    }
};

export const runner = {
    go() {
        return `Runner: go!
${go(this.nextRelay)}`;
    }
};

export const swimmer = {
    go() {
        return `Swimmer: go!
${go(this.nextRelay)}`;
    }
};
