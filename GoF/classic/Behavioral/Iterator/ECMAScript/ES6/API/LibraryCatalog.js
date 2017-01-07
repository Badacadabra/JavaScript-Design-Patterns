import Catalog from './Catalog';

// ==============================
// CONCRETE ITERATOR 
// ==============================

export default class LibraryCatalog extends Catalog {
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
