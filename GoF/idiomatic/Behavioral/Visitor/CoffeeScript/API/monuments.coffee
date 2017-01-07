'use strict'

# ==============================
# MONUMENTS 
# ==============================

module.exports = (name) ->
    name: name
    accept: (visitor) ->
        visitor.visit @
