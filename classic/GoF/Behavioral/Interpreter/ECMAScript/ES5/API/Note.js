'use strict';

var MusicNotation = require('./MusicNotation');

// ==============================
// CONCRETE (TERMINAL) EXPRESSION
// ==============================

var Note = function (name) {
    MusicNotation.call(this, name);
};
Note.prototype = Object.create(MusicNotation.prototype);
Note.prototype.constructor = Note;

Note.prototype.interpret = function (sonata) {
    return sonata.getComposer() + " played " + this._name + "\n";
};

module.exports = Note;
