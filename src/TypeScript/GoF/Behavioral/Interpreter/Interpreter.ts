// ==============================
// CONCRETE CONTEXT
// ==============================

class Sonata {
    private name: string;
    private composer: string;

    constructor(name: string, composer: string) {
        this.name = name;
        this.composer = composer;
    }

    public getName(): string {
        return this.name; 
    }

    public getComposer(): string {
        return this.composer; 
    }
}

// ==============================
// ABSTRACT EXPRESSION
// ==============================

abstract class MusicNotation {
    protected name: string;

    constructor(name: string) {
        this.name = name; 
    }

    public abstract interpret(sonata: Sonata): string;
}

// ==============================
// CONCRETE EXPRESSIONS
// ==============================

// Terminal expression
class Note extends MusicNotation {
    constructor(name: string) {
        super(name);
    }

    public interpret(sonata: Sonata): string {
        return `${sonata.getComposer()} played ${this.name}\n`;
    }
}

// Nonterminal expression
class Arpeggio extends MusicNotation {
    private notes: Note[] = [];

    constructor(name: string) {
        super(name);
    }

    public addNotes(newNotes: Note[]): void {
        for (let note of newNotes) {
            this.notes.push(note);
        }
    }

    public interpret(sonata: Sonata): string {
        let res: string = "";
        for (let note of this.notes) {
            res += note.interpret(sonata); 
        }
        res += `This was a ${this.name} arpeggio from ${sonata.getName()}.\n`;
        return res; 
    }
}

// ==============================
// CLIENT CODE
// ==============================

// To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)
let sonata: Sonata = new Sonata("Moonlight Sonata", "Beethoven");

// Notes
let gSharp: Note = new Note("G#"),
    cSharp: Note = new Note("C#"),
    e: Note = new Note("E");

// Arpeggio
let cSharpMinor: Arpeggio = new Arpeggio("C#m");
cSharpMinor.addNotes([gSharp, cSharp, e]);

// Melody
let melody: Arpeggio[] = [];

for (let i = 0; i < 4; i++) { // The same musical pattern is repeated four times...
    melody.push(cSharpMinor);
}

// Interpretation
for (let arpeggio of melody) {
    console.log(arpeggio.interpret(sonata));
}
