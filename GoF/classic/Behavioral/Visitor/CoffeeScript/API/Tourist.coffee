'use strict'

Visitor = require './Visitor'

# ==============================
# CONCRETE VISITOR 
# ==============================

class Tourist extends Visitor
    visit: (monument) ->
        "Visiting #{monument.constructor.name}"

module.exports = Tourist
