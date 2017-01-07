import sonata from './API/context';
import { note, arpeggio } from './API/expressions';

// ==============================
// CLIENT CODE 
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)

// Notes
let gSharp = note("G#"),
    cSharp = note("C#"),
    e = note("E");

// Arpeggio
let cSharpMinor = arpeggio("C#m");
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
