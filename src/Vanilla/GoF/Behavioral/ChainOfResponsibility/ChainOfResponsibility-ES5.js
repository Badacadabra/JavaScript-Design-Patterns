'use strict';

// ==============================
// ABSTRACT RACER 
// ==============================

var Racer = (function() {
    function Racer() {
        if (this.constructor === Racer) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Racer.prototype.go = function () {
        var res = "";
        if (this.nextRelay === undefined) {
            res += "";
        } else {
            res += this.nextRelay.go();
        }
        return res;
    };

    Racer.prototype.setNextRelay = function (relay) {
        this.nextRelay = relay;
    };

    return Racer;
})();

// ==============================
// CONCRETE RACERS
// ==============================

var Walker = (function () {
    function Walker() {}
    Walker.prototype = Object.create(Racer.prototype);
    Walker.prototype.constructor = Walker;

    Walker.prototype.go = function () {
        return "Walker: go!\n" + Racer.prototype.go.call(this);
    };

    return Walker;
})();

var Runner = (function () {
    function Runner() {}
    Runner.prototype = Object.create(Racer.prototype);
    Runner.prototype.constructor = Runner;

    Runner.prototype.go = function () {
        return "Runner: go!\n" + Racer.prototype.go.call(this);
    };

    return Runner;
})();

var Swimmer = (function () {
    function Swimmer() {}
    Swimmer.prototype = Object.create(Racer.prototype);
    Swimmer.prototype.constructor = Swimmer;

    Swimmer.prototype.go = function () {
        return "Swimmer: go!\n" + Racer.prototype.go.call(this);
    };

    return Swimmer;
})();

// ==============================
// CLIENT CODE
// ==============================

var walker = new Walker(),
    runner = new Runner(),
    swimmer = new Swimmer();

walker.setNextRelay(runner);
runner.setNextRelay(swimmer);

console.log(walker.go());
