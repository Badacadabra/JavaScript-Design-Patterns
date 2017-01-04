'use strict'

# ==============================
# RECIPES
# ==============================

pasta = (sauce) ->
    cook: -> 
        "Pasta with #{sauce.ingredients()}"

risotto = (sauce) ->
    cook: -> 
        "Risotto with #{sauce.ingredients()}"

module.exports =
    pasta: pasta
    risotto: risotto
