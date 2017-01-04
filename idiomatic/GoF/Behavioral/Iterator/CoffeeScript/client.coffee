'use strict'

library = require './API/iterable'
catalog = require './API/iterator'

# ==============================
# CLIENT CODE 
# ==============================

library.books = ["Foo", "Bar"]
catalog.collection = library

console.log catalog.next() while catalog.hasNext()
