// ==============================
// CONTEXT
// ==============================

const sonata = {
    name: "Moonlight Sonata",
    composer: "Beethoven"
};

// ==============================
// EXPRESSIONS
// ==============================

// Terminal expressions
const note = name => {
    return {
        name,
        interpret(sonata) {
            return `${sonata.composer} played ${this.name}\n`;
        }
    }
};

// Nonterminal expressions
const arpeggio = name => {
    return {
        name,
        notes: [],
        addNotes(notes) {
            for (let note of notes) {
                this.notes.push(note);
            }
        },
        interpret(sonata) {
            let res = "";
            for (let note of this.notes) {
                res += note.interpret(sonata); 
            }
            res += `This was a ${this.name} arpeggio from ${sonata.name}.\n`;
            return res; 
        }
    }
};

// ==============================
// TEST 
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
