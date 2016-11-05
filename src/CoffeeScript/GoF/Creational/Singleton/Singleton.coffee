"use strict"

# ==============================
# SINGLETON: "ME"
# ==============================

class Me
    # Here the constructor is private
    constructor: (@firstName, @lastName) ->
    
    # Static method to get the unique instance of 'Me'
    @getInstance = ->
        # Static attribute which holds the unique instance of 'Me'
        @instance = new Me unless @instance
        @instance
    
# ==============================
# CLIENT CODE 
# ==============================

me = Me.getInstance()
meAgain = Me.getInstance()

# It will display 'OK' since 'me' and 'meAgain' are references to the same object.
# Only one instance exists in the code. This is what we expect from a Singleton. :)

if me is meAgain then console.log "OK" else console.log "KO"
