// ==============================
// EXPRESSIONS
// ==============================

// Terminal expressions
export const note = name => {
    return {
        name,
        interpret(sonata) {
            return `${sonata.composer} played ${this.name}\n`;
        }
    }
};

// Nonterminal expressions
export const arpeggio = name => {
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
