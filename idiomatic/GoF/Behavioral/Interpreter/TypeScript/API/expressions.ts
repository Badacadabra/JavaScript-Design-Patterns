import { Sonata } from './context';

// ==============================
// EXPRESSIONS
// ==============================

export interface MusicNotation {
    name: string;
    interpret(sonata: Sonata);
    notes?: MusicNotation[];
    addNotes?: (notes: MusicNotation[]) => void;
}

// Terminal expressions
export const note: (name: string) => MusicNotation = function (name: string): MusicNotation {
    return {
        name: name,
        interpret(sonata) {
            return `${sonata.composer} played ${this.name}\n`;
        }
    }
};

// Nonterminal expressions
export const arpeggio: (name: string) => MusicNotation = function (name: string): MusicNotation {
    return {
        name: name,
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
