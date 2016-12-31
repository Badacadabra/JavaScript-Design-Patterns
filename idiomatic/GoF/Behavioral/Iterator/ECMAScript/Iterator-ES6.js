// ==============================
// ITERATOR
// ==============================

const catalog = {
    index: 0,
    next() {
        if (this.index < this.collection.books.length) {
            return {
                value: this.collection.books[this.index++]
            };
        } else {
            return {
                done: true
            };
        }
    }
};

// ==============================
// ITERABLE
// ==============================

const library = {
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
