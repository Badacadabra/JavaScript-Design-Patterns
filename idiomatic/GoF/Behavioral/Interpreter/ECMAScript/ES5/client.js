'use strict';

var sonata = require('./API/context'),
    musicNotation = require('./API/expressions');

// ==============================
// CLIENT CODE 
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)

// Notes
var gSharp = musicNotation.note("G#"),
    cSharp = musicNotation.note("C#"),
    e = musicNotation.note("E");

// Arpeggio
var cSharpMinor = musicNotation.arpeggio("C#m");
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
