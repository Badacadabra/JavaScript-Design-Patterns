'use strict'

HistoricalMonument = require './HistoricalMonument'

# ==============================
# CONCRETE MONUMENT
# ==============================

class Abbey extends HistoricalMonument
    accept: (visitor) ->
        visitor.visit(@)

module.exports = Abbey
