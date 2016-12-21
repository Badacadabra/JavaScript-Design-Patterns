'use strict';

// ==============================
// ABSTRACT ITERATOR 
// ==============================

var Catalog = (function () {
    function Catalog() {
        if (this.constructor === Catalog) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    Catalog.prototype.hasNext = function () {
        throw new Error("You cannot call an abstract method!");
    };

    Catalog.prototype.next = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Catalog;
})(); 

// ==============================
// ABSTRACT ITERABLE 
// ==============================

var Collection = (function () {
    function Collection() {
        if (this.constructor === Collection) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    Collection.prototype.list = function() {
        throw new Error("You cannot call an abstract method!");
    };

    return Collection;
})();

// ==============================
// CONCRETE ITERATOR 
// ==============================

var LibraryCatalog = (function () {
    var index = 0;

    function LibraryCatalog(collection) {
        this._collection = collection;
    }
    LibraryCatalog.prototype = Object.create(Catalog.prototype);
    LibraryCatalog.prototype.constructor = LibraryCatalog;

    LibraryCatalog.prototype.hasNext = function () {
        return index < this._collection.getBooks().length;
    };

    LibraryCatalog.prototype.next = function () {
        return this._collection.getBooks()[index++];
    };

    return LibraryCatalog;
})();

// ==============================
// CONCRETE ITERABLE 
// ==============================

var Library = (function () {
    var books = [];

    function Library(refs) {
        books = refs;
    }
    Library.prototype = Object.create(Collection.prototype);
    Library.prototype.constructor = Library;

    Library.prototype.list = function () {
        return new LibraryCatalog(this);
    };

    Library.prototype.getBooks = function () {
        return books; 
    };

    return Library;
})();

// ==============================
// CLIENT CODE
// ==============================

// We get the iterator (catalog) from the iterable object (library)
var library = new Library(["Foo", "Bar"]),
    catalog = library.list();

while (catalog.hasNext()) {
    console.log(catalog.next());
}
