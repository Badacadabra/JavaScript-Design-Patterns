'use strict'

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

module.exports = Me
