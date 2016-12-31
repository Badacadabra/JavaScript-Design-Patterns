'use strict'

go = (nextRelay) ->
    res = ""
    if nextRelay? then res += nextRelay.go() else res += ""
    res

# ==============================
# RACERS
# ==============================

walker =
    go: -> 
        """
        Walker: go!
        #{go(@nextRelay)}
        """

runner =
    go: -> 
        """
        Runner: go!
        #{go(@nextRelay)}
        """

swimmer = 
    go: ->
        """
        Swimmer: go!
        #{go(@nextRelay)}
        """

# ==============================
# TEST 
# ==============================

walker.nextRelay = runner
runner.nextRelay = swimmer

console.log walker.go()
