'use strict';

// ==============================
// CONCRETE CONTEXT
// ==============================

var Sonata = function (name, composer) {
    this._name = name;
    this._composer = composer;
}

Sonata.prototype.getName = function () {
    return this._name; 
};

Sonata.prototype.getComposer = function () {
    return this._composer; 
};

module.exports = Sonata;
