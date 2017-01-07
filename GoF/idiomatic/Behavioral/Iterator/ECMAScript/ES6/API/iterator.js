// ==============================
// ITERATOR (CATALOG)
// ==============================

export default {
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
