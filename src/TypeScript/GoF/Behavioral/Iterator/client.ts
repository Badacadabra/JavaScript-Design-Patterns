import Library from './API/Library';
import LibraryCatalog from './API/LibraryCatalog';

// ==============================
// CLIENT CODE
// ==============================

// We get the iterator (catalog) from the iterable object (library)
let library: Library = new Library(["Foo", "Bar"]),
    catalog: LibraryCatalog = library.list();

while (catalog.hasNext()) {
    console.log(catalog.next());
}
