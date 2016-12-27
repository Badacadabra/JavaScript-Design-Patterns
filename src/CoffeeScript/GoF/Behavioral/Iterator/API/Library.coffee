'use strict'

Collection = require './Collection'
LibraryCatalog = require './LibraryCatalog'

# ==============================
# CONCRETE ITERABLE 
# ==============================

class Library extends Collection 
    constructor: (@_books) ->

    list: ->
        new LibraryCatalog(@)

    getBooks: ->
        @_books

module.exports = Library
