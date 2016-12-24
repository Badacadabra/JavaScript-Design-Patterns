# ==============================
# ABSTRACT MONUMENT 
# ==============================

class HistoricalMonument
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is HistoricalMonument

    accept: (visitor) ->
        throw new Error "You cannot instantiate an abstract class!"

# ==============================
# ABSTRACT VISITOR
# ==============================

class Visitor
    constructor: -> 
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Visitor

    visit: (monument) ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE MONUMENTS 
# ==============================

class Castle extends HistoricalMonument
    accept: (visitor) ->
        visitor.visit(@)

class Abbey extends HistoricalMonument
    accept: (visitor) ->
        visitor.visit(@)

# ==============================
# CONCRETE VISITOR 
# ==============================

class Tourist extends Visitor
    visit: (monument) ->
        "Visiting #{monument.constructor.name}"

# ==============================
# CLIENT CODE
# ==============================

castle = new Castle
abbey = new Abbey
tourist = new Tourist

console.log castle.accept tourist
console.log abbey.accept tourist
