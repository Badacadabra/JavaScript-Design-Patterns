'use strict'

# ==============================
# MONUMENTS 
# ==============================

monument = (name) ->
    name: name
    accept: (visitor) ->
        visitor.visit @

# ==============================
# VISITOR 
# ==============================

tourist =
    visit: (monument) ->
        "Visiting #{monument.name}"

# ==============================
# TEST 
# ==============================

castle = monument 'Castle'
abbey = monument 'Abbey'

console.log castle.accept tourist
console.log abbey.accept tourist
