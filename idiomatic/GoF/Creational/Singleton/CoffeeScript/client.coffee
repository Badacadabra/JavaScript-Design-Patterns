'use strict'

me = require './API/me'
meAgain = require './API/me'

# ==============================
# CLIENT CODE 
# ==============================

# It will display 'OK' since 'me' and 'meAgain' are references to the same object.
# Only one instance exists in the code. This is what we expect from a Singleton. :)
if me is meAgain then console.log "OK" else console.log "KO"
