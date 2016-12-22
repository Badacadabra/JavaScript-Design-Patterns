'use strict';

// ==============================
// ORIGINATOR 
// ==============================

var Browser = (function() {
    function Browser(currentPage) {
        this._currentPage = currentPage;
    }

    Browser.prototype.saveCurrentPage = function () {
       return new Bookmark(this._currentPage); 
    };

    Browser.prototype.getCurrentPage = function () {
       return this._currentPage; 
    };

    Browser.prototype.setCurrentPage = function (webpage) {
       this._currentPage = webpage; 
    };

    return Browser;
})();

// ==============================
// MEMENTO
// ==============================

var Bookmark = (function () {
    function Bookmark(webpage) {
        this._webpage = webpage;
    }

    Bookmark.prototype.getPage = function () {
        return this._webpage;
    };

    return Bookmark;
})();

// ==============================
// CARETAKER 
// ==============================

var BookmarksManager = (function () {
    var bookmarks = [];

    function BookmarksManager() {}

    BookmarksManager.prototype.addBookmark = function (bookmark) {
        bookmarks.push(bookmark);
    };

    BookmarksManager.prototype.getBookmark = function (index) {
        return bookmarks[index];
    };

    return BookmarksManager;
})();

// ==============================
// CLIENT CODE
// ==============================

var browser = new Browser("http://www.badacadabra.net"),
    bookmark = browser.saveCurrentPage(),
    bookmarksManager = new BookmarksManager();

bookmarksManager.addBookmark(bookmark);
browser.setCurrentPage("https://www.google.com");
browser.setCurrentPage("https://www.amazon.com");
bookmark = browser.saveCurrentPage(); 
bookmarksManager.addBookmark(bookmark);
browser.setCurrentPage("https://www.twitter.com");

console.log("Current page: " + browser.getCurrentPage());
console.log("Latest bookmark: " + bookmark.getPage());
console.log("First bookmark: " + bookmarksManager.getBookmark(0).getPage());
