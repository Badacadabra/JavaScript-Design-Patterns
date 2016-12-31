import MusicNotation from './MusicNotation';
import Note from './Note';
import Sonata from './Sonata';

// ==============================
// CONCRETE NONTERMINAL EXPRESSION
// ==============================

export default class Arpeggio extends MusicNotation {
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
