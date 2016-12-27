'use strict'

Bookmark = require './Bookmark'

# ==============================
# ORIGINATOR 
# ==============================

class Browser
    constructor: (@_currentPage) ->

    saveCurrentPage: ->
       new Bookmark(@_currentPage)

    getCurrentPage: ->
       @_currentPage

    setCurrentPage: (@_currentPage) ->

module.exports = Browser
