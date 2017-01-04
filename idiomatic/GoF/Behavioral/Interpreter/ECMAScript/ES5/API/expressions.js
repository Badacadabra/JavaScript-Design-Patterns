'use strict';

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

module.exports = {
    note: note,
    arpeggio: arpeggio
};
