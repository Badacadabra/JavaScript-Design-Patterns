import Catalog from './Catalog';
import Library from './Library';

// ==============================
// CONCRETE ITERATOR 
// ==============================

export default class LibraryCatalog implements Catalog {
    private index: number = 0;
    private collection: Library; 

    constructor(collection: Library) {
        this.collection = collection;
    }

    hasNext(): boolean {
        return this.index < this.collection.getBooks().length;
    }

    next(): string {
        return this.collection.getBooks()[this.index++];
    }
}
