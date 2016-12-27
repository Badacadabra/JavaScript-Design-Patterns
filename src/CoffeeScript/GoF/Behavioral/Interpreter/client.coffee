'use strict'

Sonata = require './API/Sonata'
Note = require './API/Note'
Arpeggio = require './API/Arpeggio'

# ==============================
# CLIENT CODE
# ==============================

# To avoid overcomplexity, we only take into account the first measure and the right hand (G-clef)
sonata = new Sonata "Moonlight Sonata", "Beethoven"

# Notes
gSharp = new Note "G#"
cSharp = new Note "C#"
e = new Note "E"

# Arpeggio
cSharpMinor = new Arpeggio "C#m"
cSharpMinor.addNotes [gSharp, cSharp, e]

# Melody
melody = []

melody.push cSharpMinor for i in [1..4] # The same musical pattern is repeated four times...
    
# Interpretation
console.log arpeggio.interpret sonata for arpeggio in melody
