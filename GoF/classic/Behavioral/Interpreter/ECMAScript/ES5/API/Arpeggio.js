'use strict';

var MusicNotation = require('./MusicNotation');

// ==============================
// CONCRETE (NONTERMINAL) EXPRESSION
// ==============================

var Arpeggio, notes;

Arpeggio = function (name) {
    MusicNotation.call(this, name);
};
Arpeggio.prototype = Object.create(MusicNotation.prototype);
Arpeggio.prototype.constructor = Arpeggio;

notes = [];

Arpeggio.prototype.addNotes = function (newNotes) {
    for (var i = 0, len = newNotes.length; i < len; i++) {
        notes.push(newNotes[i]);
    }
};

Arpeggio.prototype.interpret = function (sonata) {
    var res = "";
    for (var i = 0, len = notes.length; i < len; i++) {
        res += notes[i].interpret(sonata); 
    }
    res += "This was a " + this._name + " arpeggio from " + sonata.getName() + ".\n";
    return res; 
};

module.exports = Arpeggio;
