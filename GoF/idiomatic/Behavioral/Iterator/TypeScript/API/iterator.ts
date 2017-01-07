import { Library } from './iterable';

// ==============================
// ITERATOR (CATALOG)
// ==============================

export interface Catalog {
    index: number;
    collection?: Library;
    next(): {value: any; done: boolean};
}

export const catalog: Catalog = {
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
