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

# ==============================
# CONCRETE RACERS
# ==============================

class Walker extends Racer
    go: ->
        "Walker: go!\n#{super}"

class Runner extends Racer
    go: ->
        "Runner: go!\n#{super}"

class Swimmer extends Racer
    go: ->
        "Swimmer: go!\n#{super}"

# ==============================
# CLIENT CODE
# ==============================

walker = new Walker
runner = new Runner
swimmer = new Swimmer

walker.setNextRelay runner
runner.setNextRelay swimmer

console.log walker.go()
