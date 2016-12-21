// ==============================
// ABSTRACT ITERATOR 
// ==============================

class Catalog {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    hasNext() {
        throw new Error("You cannot call an abstract method!");
    }

    next() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// ABSTRACT ITERABLE 
// ==============================

class Collection {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    list() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE ITERATOR 
// ==============================

class LibraryCatalog extends Catalog {
    constructor(collection) {
        super();
        this._index = 0;
        this._collection = collection;
    }

    hasNext() {
        return this._index < this._collection.books.length;
    }

    next() {
        return this._collection.books[this._index++];
    }
}

// ==============================
// CONCRETE ITERABLE 
// ==============================

class Library extends Collection {
    constructor(books) {
        super();
        this._books = books;
    }

    list() {
        return new LibraryCatalog(this);
    }

    get books() {
        return this._books; 
    }
}

// ==============================
// CLIENT CODE
// ==============================

// We get the iterator (catalog) from the iterable object (library)
let library = new Library(["Foo", "Bar"]),
    catalog = library.list();

while (catalog.hasNext()) {
    console.log(catalog.next());
}
