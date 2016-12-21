// ==============================
// CONCRETE CONTEXT
// ==============================

class Sonata {
    constructor(name, composer) {
        this._name = name;
        this._composer = composer;
    }

    get name() {
        return this._name; 
    };

    get composer() {
        return this._composer; 
    };
}

// ==============================
// ABSTRACT EXPRESSION
// ==============================

class MusicNotation {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._name = name;
    }

    interpret(sonata) {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE EXPRESSIONS
// ==============================

// Terminal expression
class Note extends MusicNotation {
    constructor(name) {
        super(name);
    }

    interpret(sonata) {
        return `${sonata.composer} played ${this._name}\n`;
    }
}

// Nonterminal expression
class Arpeggio extends MusicNotation {
    constructor(name) {
        super(name);
        this._notes = [];
    }

    addNotes(newNotes) {
        for (let note of newNotes) {
            this._notes.push(note);
        }
    }

    interpret(sonata) {
        let res = "";
        for (let note of this._notes) {
            res += note.interpret(sonata); 
        }
        res += `This was a ${this._name} arpeggio from ${sonata.name}.\n`;
        return res; 
    }
}

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
