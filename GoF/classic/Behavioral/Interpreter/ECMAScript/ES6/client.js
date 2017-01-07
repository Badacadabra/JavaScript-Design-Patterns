import Sonata from './API/Sonata';
import Note from './API/Note';
import Arpeggio from './API/Arpeggio';

// ==============================
// CLIENT CODE
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)
let sonata = new Sonata("Moonlight Sonata", "Beethoven");

// Notes
let gSharp = new Note("G#"),
    cSharp = new Note("C#"),
    e = new Note("E");

// Arpeggio
let cSharpMinor = new Arpeggio("C#m");
cSharpMinor.addNotes([gSharp, cSharp, e]);

// Melody
let melody = [];

for (let i = 0; i < 4; i++) { // The same musical pattern is repeated four times...
    melody.push(cSharpMinor);
}

// Interpretation
for (let arpeggio of melody) {
    console.log(arpeggio.interpret(sonata));
}
