'use strict'

sonata = require './API/context'
musicNotation = require './API/expressions'

# ==============================
# CLIENT CODE 
# ==============================

# To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)

# Notes
gSharp = musicNotation.note "G#"
cSharp = musicNotation.note "C#"
e = musicNotation.note "E"

# Arpeggio
cSharpMinor = musicNotation.arpeggio "C#m"
cSharpMinor.addNotes [gSharp, cSharp, e]

# Melody
melody = []

melody.push cSharpMinor for i in [1..4]  # The same musical pattern is repeated four times...

# Interpretation
console.log arpeggio.interpret sonata for arpeggio in melody 
