'use strict'

# ==============================
# ABSTRACTIONS
# ==============================

class Recipe
    constructor: (sauce) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Recipe
        @_sauce = sauce   

    cook: ->
        throw new Error "You cannot call an abstract class!"

module.exports = Recipe
