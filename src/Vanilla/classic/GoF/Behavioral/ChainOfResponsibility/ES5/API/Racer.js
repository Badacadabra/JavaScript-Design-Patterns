'use strict';

// ==============================
// ABSTRACT RACER 
// ==============================

var Racer = function() {
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

module.exports = Racer;
