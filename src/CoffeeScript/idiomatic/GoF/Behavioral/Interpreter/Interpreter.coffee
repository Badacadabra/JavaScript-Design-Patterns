'use strict'

# ==============================
# CONTEXT
# ==============================

sonata =
    name: "Moonlight Sonata"
    composer: "Beethoven"

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

# ==============================
# TEST 
# ==============================

# To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)

# Notes
gSharp = note "G#"
cSharp = note "C#"
e = note "E"

# Arpeggio
cSharpMinor = arpeggio "C#m"
cSharpMinor.addNotes [gSharp, cSharp, e]

# Melody
melody = []

melody.push cSharpMinor for i in [1..4]  # The same musical pattern is repeated four times...

# Interpretation
console.log arpeggio.interpret sonata for arpeggio in melody 
