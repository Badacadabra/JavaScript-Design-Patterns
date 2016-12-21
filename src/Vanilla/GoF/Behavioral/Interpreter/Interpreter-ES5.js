'use strict';

// ==============================
// CONCRETE CONTEXT
// ==============================

var Sonata = (function () {
    function Sonata(name, composer) {
        this._name = name;
        this._composer = composer;
    }

    Sonata.prototype.getName = function () {
        return this._name; 
    };

    Sonata.prototype.getComposer = function () {
        return this._composer; 
    };

    return Sonata;
})();

// ==============================
// ABSTRACT EXPRESSION
// ==============================

var MusicNotation = (function() {
    function MusicNotation(name) {
        if (this.constructor === MusicNotation) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._name = name;
    }

    MusicNotation.prototype.interpret = function (sonata) {
        throw new Error("You cannot call an abstract method!");
    };

    return MusicNotation;
})();

// ==============================
// CONCRETE EXPRESSIONS
// ==============================

// Terminal expression
var Note = (function () {
    function Note(name) {
        MusicNotation.call(this, name);
    }
    Note.prototype = Object.create(MusicNotation.prototype);
    Note.prototype.constructor = Note;

    Note.prototype.interpret = function (sonata) {
        return sonata.getComposer() + " played " + this._name + "\n";
    };

    return Note;
})();

// Nonterminal expression
var Arpeggio = (function () {
    var notes = [];

    function Arpeggio(name) {
        MusicNotation.call(this, name);
    }
    Arpeggio.prototype = Object.create(MusicNotation.prototype);
    Arpeggio.prototype.constructor = Arpeggio;

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

    return Arpeggio;
})();

// ==============================
// CLIENT CODE
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)
var sonata = new Sonata("Moonlight Sonata", "Beethoven");

// Notes
var gSharp = new Note("G#"),
    cSharp = new Note("C#"),
    e = new Note("E");

// Arpeggio
var cSharpMinor = new Arpeggio("C#m");
cSharpMinor.addNotes([gSharp, cSharp, e]);

// Melody
var melody = [];

for (var i = 0; i < 4; i++) { // The same musical pattern is repeated four times...
    melody.push(cSharpMinor);
}

// Interpretation
for (var j = 0, len = melody.length; j < len; j++) {
    console.log(melody[j].interpret(sonata));
}
