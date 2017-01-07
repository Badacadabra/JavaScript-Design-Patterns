'use strict'

# ==============================
# ABSTRACT RACER 
# ==============================

class Racer
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Racer

    go: ->
        res = ""
        if @nextRelay? then res += @nextRelay.go() else res += ""
        res

    setNextRelay: (relay) ->
        @nextRelay = relay

module.exports = Racer
