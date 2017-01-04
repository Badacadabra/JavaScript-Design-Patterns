import { catalog } from './API/iterator';
import { library } from './API/iterable';

// ==============================
// CLIENT CODE 
// ==============================

library.books = ["Foo", "Bar"];
catalog.collection = library;

for (let book of library) {
    console.log(book);
}
