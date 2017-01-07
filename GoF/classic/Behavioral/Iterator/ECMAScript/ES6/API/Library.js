import Collection from './Collection';
import LibraryCatalog from './LibraryCatalog';

// ==============================
// CONCRETE ITERABLE 
// ==============================

export default class Library extends Collection {
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
