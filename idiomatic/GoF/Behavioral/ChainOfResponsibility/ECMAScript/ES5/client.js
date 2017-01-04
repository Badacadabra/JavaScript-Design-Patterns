'use strict';

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

// ==============================
// TEST 
// ==============================

walker.nextRelay = runner;
runner.nextRelay = swimmer;

console.log(walker.go());
