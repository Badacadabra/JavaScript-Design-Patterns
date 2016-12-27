'use strict'

MusicNotation = require './MusicNotation'

# ==============================
# CONCRETE (NONTERMINAL) EXPRESSION
# ==============================

class Arpeggio extends MusicNotation
    constructor: (name) ->
        super name
        @_notes = []

    addNotes: (newNotes) ->
        @_notes.push note for note in newNotes
            

    interpret: (sonata) ->
        res = ""
        res += note.interpret sonata for note in @_notes
        res += "This was a #{@_name} arpeggio from #{sonata.name}.\n"
        res 

module.exports = Arpeggio
