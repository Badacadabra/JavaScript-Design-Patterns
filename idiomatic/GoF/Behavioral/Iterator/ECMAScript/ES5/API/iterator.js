'use strict';

// ==============================
// ITERATOR (CATALOG)
// ==============================

module.exports = {
    index: 0,
    hasNext: function () {
        return this.index < this.collection.books.length;
    },
    next: function () {
        return this.collection.books[this.index++];
    }
};
