# ==============================
# CONCRETE CONTEXT
# ==============================

class Sonata
    constructor: (@name, @composer) -> 

    getName: ->
        @_name

    getComposer: ->
        @_composer

# ==============================
# ABSTRACT EXPRESSION
# ==============================

class MusicNotation
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is MusicNotation
        @_name = name

    interpret: (sonata) ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE EXPRESSIONS
# ==============================

# Terminal expression
class Note extends MusicNotation
    constructor: (name) ->
        super name

    interpret: (sonata) ->
        "#{sonata.composer} played #{@_name}\n"

# Nonterminal expression
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
