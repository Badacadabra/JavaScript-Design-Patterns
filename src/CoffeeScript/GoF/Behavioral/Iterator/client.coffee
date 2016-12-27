'use strict'

Library = require './API/Library'

# ==============================
# CLIENT CODE
# ==============================

# We get the iterator (catalog) from the iterable object (library)
library = new Library ["Foo", "Bar"]
catalog = library.list()

console.log catalog.next() while catalog.hasNext()
