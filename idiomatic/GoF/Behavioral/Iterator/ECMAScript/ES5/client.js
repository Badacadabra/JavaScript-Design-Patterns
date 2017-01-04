'use strict';

var library = require('./API/iterable'),
    catalog = require('./API/iterator');

// ==============================
// CLIENT CODE 
// ==============================

library.books = ["Foo", "Bar"];
catalog.collection = library;

while (catalog.hasNext()) {
    console.log(catalog.next());
}
