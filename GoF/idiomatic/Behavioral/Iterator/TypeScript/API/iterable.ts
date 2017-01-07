import { Catalog, catalog } from './iterator';

// ==============================
// ITERABLE (LIBRARY)
// ==============================

export interface Library {
   books: string[];
   [Symbol.iterator](): Catalog;
}

export const library: Library = {
    books: [],
    [Symbol.iterator]() {
        return catalog; 
    }
};
