'use strict';

// ==============================
// CARETAKER 
// ==============================

var BookmarksManager, bookmarks;

BookmarksManager = function () {};

bookmarks = [];

BookmarksManager.prototype.addBookmark = function (bookmark) {
    bookmarks.push(bookmark);
};

BookmarksManager.prototype.getBookmark = function (index) {
    return bookmarks[index];
};

module.exports = BookmarksManager;
