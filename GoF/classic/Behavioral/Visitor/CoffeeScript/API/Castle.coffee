'use strict'

HistoricalMonument = require './HistoricalMonument'

# ==============================
# CONCRETE MONUMENT
# ==============================

class Castle extends HistoricalMonument
    accept: (visitor) ->
        visitor.visit(@)

module.exports = Castle
