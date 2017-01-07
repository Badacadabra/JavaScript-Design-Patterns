import MusicNotation from './MusicNotation';

// ==============================
// CONCRETE (NONTERMINAL) EXPRESSION
// ==============================

export default class Arpeggio extends MusicNotation {
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
