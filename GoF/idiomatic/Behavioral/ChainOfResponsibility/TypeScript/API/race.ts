// ==============================
// GO GO GO! 
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
// RACERS
// ==============================

export interface Racer {
    nextRelay?: Racer;
    go(): string;
}

export const walker: Racer = {
    go() {
        return `Walker: go!
${go(this.nextRelay)}`;
    }
};

export const runner: Racer = {
    go() {
        return `Runner: go!
${go(this.nextRelay)}`;
    }
};

export const swimmer: Racer = {
    go() {
        return `Swimmer: go!
${go(this.nextRelay)}`;
    }
};
