'use strict'

# ==============================
# COLLEAGUES (NEIGHBORS)
# ==============================

neighbor = (name) ->
        name: name
        send: (message, mediator) ->
            mediator.send message, this
        receive: (message, sender) ->
            "[#{@name}] Message from #{sender}: '#{message}'\n";

tom = neighbor "Tom" 
dick = neighbor "Dick"

# ==============================
# MEDIATOR 
# ==============================

harry =
    tom: tom
    dick: dick
    send: (message, neighbor) ->
        if neighbor.name is "Tom"
            dick.receive message, "Tom"
        else if neighbor.name is "Dick"
            tom.receive message, "Dick"
        else
            throw
                type: "Not found",
                message: "The given person has not been found in the neighborhood."

# ==============================
# TEST 
# ==============================

conversation = ""
conversation += tom.send "Could you lower the volume of your music, please?", harry
conversation += dick.send "Are you serious? The volume is actually very low...", harry

console.log conversation
