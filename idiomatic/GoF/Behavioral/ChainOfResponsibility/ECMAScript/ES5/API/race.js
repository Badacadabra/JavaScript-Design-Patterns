'use strict';

// ==============================
// GO GO GO! 
// ==============================

var go = function (nextRelay) {
    var res = "";
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

var walker = {
    go: function () {
        return "Walker: go!\n" + go(this.nextRelay);
    }
};

var runner = {
    go: function () {
        return "Runner: go!\n" + go(this.nextRelay);
    }
};

var swimmer = {
    go: function () {
        return "Swimmer: go!\n" + go(this.nextRelay);
    }
};

module.exports = {
    walker: walker,
    runner: runner,
    swimmer: swimmer
};
