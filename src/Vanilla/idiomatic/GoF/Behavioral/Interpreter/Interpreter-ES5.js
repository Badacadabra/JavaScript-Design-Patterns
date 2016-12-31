'use strict';

// ==============================
// CONTEXT
// ==============================

var sonata = {
    name: "Moonlight Sonata",
    composer: "Beethoven"
};

// ==============================
// EXPRESSIONS
// ==============================

// Terminal expressions
var note = function (name) {
    return {
        name: name,
        interpret: function (sonata) {
            return sonata.composer + " played " + this.name + "\n";
        }
    }
};

// Nonterminal expression
var arpeggio = function (name) {
    return {
        name: name,
        notes: [],
        addNotes: function (notes) {
            for (var i = 0, len = notes.length; i < len; i++) {
                this.notes.push(notes[i]);
            }
        },
        interpret: function (sonata) {
            var res = "";
            for (var i = 0, len = this.notes.length; i < len; i++) {
                res += this.notes[i].interpret(sonata); 
            }
            res += "This was a " + this.name + " arpeggio from " + sonata.name + ".\n";
            return res; 
        }
    }
};

// ==============================
// TEST 
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)

// Notes
var gSharp = note("G#"),
    cSharp = note("C#"),
    e = note("E");

// Arpeggio
var cSharpMinor = arpeggio("C#m");
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
