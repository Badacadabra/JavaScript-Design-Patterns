'use strict';

var Collection = require('./Collection'),
    LibraryCatalog = require('./LibraryCatalog');

// ==============================
// CONCRETE ITERABLE 
// ==============================

var Library, books;

Library = function (refs) {
    books = refs;
};
Library.prototype = Object.create(Collection.prototype);
Library.prototype.constructor = Library;

books = [];

Library.prototype.list = function () {
    return new LibraryCatalog(this);
};

Library.prototype.getBooks = function () {
    return books; 
};

module.exports = Library;
