'use strict'

# ==============================
# ITERATOR 
# ==============================

catalog =
    index: 0
    hasNext: -> 
        @index < @collection.books.length
    next: -> 
        @collection.books[@index++]

# ==============================
# ITERABLE 
# ==============================

library =
    books: []

# ==============================
# TEST 
# ==============================

# We get the iterator (catalog) from the iterable object (library)
library.books = ["Foo", "Bar"]
catalog.collection = library

console.log catalog.next() while catalog.hasNext()
