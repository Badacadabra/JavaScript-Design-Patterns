'use strict';

// ==============================
// CARETAKER (BOOKMARKS MANAGER)
// ==============================

module.exports = {
    bookmarks: [],
    addBookmark: function (bookmark) {
        this.bookmarks.push(bookmark); 
    }
};
