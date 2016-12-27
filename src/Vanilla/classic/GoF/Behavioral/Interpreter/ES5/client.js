'use strict';

var Sonata = require('./API/Sonata'),
    Note = require('./API/Note'),
    Arpeggio = require('./API/Arpeggio');

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
