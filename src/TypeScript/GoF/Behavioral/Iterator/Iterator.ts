// ==============================
// ABSTRACT ITERATOR 
// ==============================

interface Catalog {
    hasNext(): boolean; 
    next(): string;
}

// ==============================
// ABSTRACT ITERABLE 
// ==============================

interface Collection {
    list(): Catalog;
}

// ==============================
// CONCRETE ITERATOR 
// ==============================

class LibraryCatalog implements Catalog {
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

// ==============================
// CONCRETE ITERABLE 
// ==============================

class Library implements Collection {
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

// ==============================
// CLIENT CODE
// ==============================

// We get the iterator (catalog) from the iterable object (library)
let library: Library = new Library(["Foo", "Bar"]),
    catalog: LibraryCatalog = library.list();

while (catalog.hasNext()) {
    console.log(catalog.next());
}
