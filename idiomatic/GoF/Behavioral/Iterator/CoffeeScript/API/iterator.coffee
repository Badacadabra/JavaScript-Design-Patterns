'use strict'

# ==============================
# ITERATOR (CATALOG) 
# ==============================

module.exports =
    index: 0
    hasNext: -> 
        @index < @collection.books.length
    next: -> 
        @collection.books[@index++]
