'use strict'

# ==============================
# EXPRESSIONS
# ==============================

# Terminal expressions
note = (name) ->
    name: name
    interpret: (sonata) -> 
        "#{sonata.composer} played #{@name}\n"

# Nonterminal expression
arpeggio = (name) ->
    name: name
    notes: []
    addNotes: (notes) ->
        @notes.push note for note in notes 
    interpret: (sonata) ->
        res = ""
        res += note.interpret sonata for note in @notes
        res += "This was a #{@name} arpeggio from #{sonata.name}.\n"
        res

module.exports =
    note: note
    arpeggio: arpeggio
