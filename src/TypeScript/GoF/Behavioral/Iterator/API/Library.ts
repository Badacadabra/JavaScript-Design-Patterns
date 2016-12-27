import Collection from './Collection';
import LibraryCatalog from './LibraryCatalog';

// ==============================
// CONCRETE ITERABLE 
// ==============================

export default class Library implements Collection {
    private books: string[];

    constructor(books: string[]) {
        this.books = books;
    }

    public list(): LibraryCatalog {
        return new LibraryCatalog(this);
    }

    public getBooks(): string[] {
        return this.books; 
    }
}
