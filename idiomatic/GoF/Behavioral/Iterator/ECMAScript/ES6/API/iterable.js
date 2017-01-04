import catalog from './iterator';

// ==============================
// ITERABLE (LIBRARY)
// ==============================

export default {
    books: [],
    [Symbol.iterator]() {
        return catalog; 
    }
};
