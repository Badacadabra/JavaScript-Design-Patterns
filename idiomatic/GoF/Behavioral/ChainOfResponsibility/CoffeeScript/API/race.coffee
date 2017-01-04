'use strict'

# ==============================
# GO GO GO! 
# ==============================

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

module.exports =
    walker: walker
    runner: runner
    swimmer: swimmer
