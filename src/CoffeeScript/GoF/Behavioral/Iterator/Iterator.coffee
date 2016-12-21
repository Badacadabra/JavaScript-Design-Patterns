# ==============================
# ABSTRACT ITERATOR 
# ==============================

class Catalog
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Catalog 

    hasNext: ->
        throw new Error "You cannot call an abstract method!"

    next: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# ABSTRACT ITERABLE 
# ==============================

class Collection
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Collection

    list: ->
        throw new Error "You cannot call an abstract method!"

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

# ==============================
# CONCRETE ITERABLE 
# ==============================

class Library extends Collection 
    constructor: (@_books) ->

    list: ->
        new LibraryCatalog(@)

    getBooks: ->
        @_books

# ==============================
# CLIENT CODE
# ==============================

# We get the iterator (catalog) from the iterable object (library)
library = new Library ["Foo", "Bar"]
catalog = library.list()

console.log catalog.next() while catalog.hasNext()
