'use strict'

Catalog = require './Catalog'

# ==============================
# CONCRETE ITERATOR 
# ==============================

class LibraryCatalog extends Catalog
    constructor: (@_collection) ->
        @_index = 0

    hasNext: ->
        @_index < @_collection.getBooks().length

    next: ->
        @_collection.getBooks()[@_index++]

module.exports = LibraryCatalog
