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

module.exports =
    tom: neighbor "Tom" 
    dick: neighbor "Dick"
