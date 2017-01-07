import library from './API/iterable';
import catalog from './API/iterator';

// ==============================
// CLIENT CODE 
// ==============================

library.books = ["Foo", "Bar"];
catalog.collection = library;

for (let book of library) {
    console.log(book);
}
