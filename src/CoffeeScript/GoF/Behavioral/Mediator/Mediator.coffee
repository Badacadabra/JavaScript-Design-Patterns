# ==============================
# ABSTRACT COLLEAGUE 
# ==============================

class Neighbor
    constructor: (mediator) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Neighbor
        @_mediator = mediator

    send: (message) ->
        throw new Error "You cannot instantiate an abstract class!"

    receive: (message, sender) ->
        throw new Error "You cannot instantiate an abstract class!"

# ==============================
# ABSTRACT MEDIATOR
# ==============================

class Mediator
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Mediator

    send: (message, neighbor) ->
        throw new Error "You cannot instantiate an abstract class!"

# ==============================
# CONCRETE COLLEAGUES (NEIGHBORS)
# ==============================

class Tom extends Neighbor
    constructor: (mediator) ->
        super mediator

    send: (message) ->
        @_mediator.send(message, @)

    receive: (message, sender) ->
        "[Tom] Message from #{sender}: '#{message}'\n"

class Dick extends Neighbor
    constructor: (mediator) ->
        super mediator

    send: (message) ->
        return @_mediator.send(message, @)

    receive: (message, sender) ->
        "[Dick] Message from #{sender}: '#{message}'\n"

# ==============================
# CONCRETE MEDIATOR 
# ==============================

class Harry extends Mediator
    constructor: ->
        @_tom = new Tom(@)
        @_dick = new Dick(@)

    send: (message, neighbor) ->
        if neighbor instanceof Tom
            @_dick.receive message, "Tom"
        else if neighbor instanceof Dick
            @_tom.receive message, "Dick"
        else
            throw new Error "Unknown neighbor"

# ==============================
# CLIENT CODE
# ==============================

harry = new Harry
tom = new Tom harry
dick = new Dick harry
conversation = ""

conversation += tom.send "Could you lower the volume of your music, please?"
conversation += dick.send "Are you serious? The volume is actually very low..."

console.log conversation
