// ==============================
// ORIGINATOR 
// ==============================

class Browser {
    constructor(currentPage) {
        this._currentPage = currentPage;
    }

    saveCurrentPage() {
       return new Bookmark(this._currentPage); 
    }

    getCurrentPage() {
       return this._currentPage; 
    }

    setCurrentPage(webpage) {
       this._currentPage = webpage; 
    }
}

// ==============================
// MEMENTO
// ==============================

class Bookmark {
    constructor(webpage) {
        this._webpage = webpage;
    }

    getPage() {
        return this._webpage;
    }
}

// ==============================
// CARETAKER 
// ==============================

class BookmarksManager {
    constructor() {
        this._bookmarks = []; 
    }

    addBookmark() {
        this._bookmarks.push(bookmark);
    }

    getBookmark(index) {
        return this._bookmarks[index];
    }
}

// ==============================
// CLIENT CODE
// ==============================

let browser = new Browser("http://www.badacadabra.net"),
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
