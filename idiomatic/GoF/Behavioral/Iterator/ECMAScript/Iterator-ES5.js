'use strict';

// ==============================
// ITERATOR 
// ==============================

var catalog = {
    index: 0,
    hasNext: function () {
        return this.index < this.collection.books.length;
    },
    next: function () {
        return this.collection.books[this.index++];
    }
};

// ==============================
// ITERABLE 
// ==============================

var library = {
    books: []
};

// ==============================
// TEST 
// ==============================

// We get the iterator (catalog) from the iterable object (library)
library.books = ["Foo", "Bar"];
catalog.collection = library;

while (catalog.hasNext()) {
    console.log(catalog.next());
}
