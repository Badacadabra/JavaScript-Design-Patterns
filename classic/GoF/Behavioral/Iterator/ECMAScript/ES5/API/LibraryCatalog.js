'use strict';

var Catalog = require('./Catalog');

// ==============================
// CONCRETE ITERATOR 
// ==============================

var LibraryCatalog, index;

LibraryCatalog = function (collection) {
    this._collection = collection;
};
LibraryCatalog.prototype = Object.create(Catalog.prototype);
LibraryCatalog.prototype.constructor = LibraryCatalog;

index = 0;

LibraryCatalog.prototype.hasNext = function () {
    return index < this._collection.getBooks().length;
};

LibraryCatalog.prototype.next = function () {
    return this._collection.getBooks()[index++];
};

module.exports = LibraryCatalog;
