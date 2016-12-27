'use strict'

# ==============================
# MEMENTO
# ==============================

class Bookmark
    constructor: (webpage) ->
        @_webpage = webpage

    getPage: ->
        @_webpage

module.exports = Bookmark
