// ==============================
// ORIGINATOR & MEMENTO 
// ==============================

interface Bookmark {
    webpage: string;
}

interface Browser {
    currentPage?: string;
    saveCurrentPage(): Bookmark; 
}

const browser: Browser = {
    saveCurrentPage() {
        return {
            webpage: this.currentPage
        } 
    }
};

// ==============================
// CARETAKER 
// ==============================

interface BookmarksManager {
    bookmarks: Bookmark[];
    addBookmark(bookmark: Bookmark): void;
}

const bookmarksManager: BookmarksManager = {
    bookmarks: [],
    addBookmark(bookmark) {
        this.bookmarks.push(bookmark); 
    }
};

// ==============================
// TEST 
// ==============================

browser.currentPage = "http://www.badacadabra.net";

let bookmark = browser.saveCurrentPage();

bookmarksManager.addBookmark(bookmark);
browser.currentPage = "https://www.google.com";
browser.currentPage = "https://www.amazon.com";
bookmark = browser.saveCurrentPage(); 
bookmarksManager.addBookmark(bookmark);
browser.currentPage = "https://www.twitter.com";

console.log("Current page: " + browser.currentPage);
console.log("Latest bookmark: " + bookmark.webpage);
console.log("First bookmark: " + bookmarksManager.bookmarks[0].webpage);
