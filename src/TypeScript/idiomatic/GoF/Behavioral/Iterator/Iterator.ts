// ==============================
// ITERATOR
// ==============================

interface Catalog {
    index: number;
    collection?: Library;
    next(): {value: any; done: boolean};
}

const catalog: Catalog = {
    index: 0,
    next() {
        if (this.index < this.collection.books.length) {
            return {
                value: this.collection.books[this.index++],
                done: false
            };
        } else {
            return {
                value: undefined,
                done: true
            };
        }
    }
};

// ==============================
// ITERABLE
// ==============================

interface Library {
   books: string[];
   [Symbol.iterator](): Catalog;
}

const library: Library = {
    books: [],
    [Symbol.iterator]() {
        return catalog; 
    }
};

// ==============================
// TEST 
// ==============================

// We get the iterator (catalog) from the iterable object (library)
library.books = ["Foo", "Bar"];
catalog.collection = library;

for (let book of library) {
    console.log(book);
}
