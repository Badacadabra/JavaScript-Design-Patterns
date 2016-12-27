'use strict';

// ==============================
// ABSTRACT EXPRESSION
// ==============================

var MusicNotation = function(name) {
    if (this.constructor === MusicNotation) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this._name = name;
}

MusicNotation.prototype.interpret = function (sonata) {
    throw new Error("You cannot call an abstract method!");
};

module.exports = MusicNotation;
