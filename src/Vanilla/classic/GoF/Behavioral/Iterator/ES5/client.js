'use strict';

var Library = require('./API/Library');

// ==============================
// CLIENT CODE
// ==============================

// We get the iterator (catalog) from the iterable object (library)
var library = new Library(["Foo", "Bar"]),
    catalog = library.list();

while (catalog.hasNext()) {
    console.log(catalog.next());
}
