// ==============================
// ORIGINATOR 
// ==============================

class Browser {
    private currentPage: string;

    constructor(currentPage: string) {
        this.currentPage = currentPage;
    }

    public saveCurrentPage(): Bookmark {
        return new Bookmark(this.currentPage); 
    }

    public getCurrentPage(): string {
        return this.currentPage; 
    }

    public setCurrentPage(webpage: string): void {
        this.currentPage = webpage; 
    }
}

// ==============================
// MEMENTO
// ==============================

class Bookmark {
    private webpage: string;

    constructor(webpage: string) {
        this.webpage = webpage;
    }

    public getPage(): string {
        return this.webpage;
    }
}

// ==============================
// CARETAKER 
// ==============================

class BookmarksManager {
    private bookmarks: Bookmark[] = [];

    public addBookmark(bookmark: Bookmark): void {
        this.bookmarks.push(bookmark);
    }

    public getBookmark(index: number): Bookmark {
        return this.bookmarks[index];
    }
}

// ==============================
// CLIENT CODE
// ==============================

let browser: Browser = new Browser("http://www.badacadabra.net"),
    bookmark: Bookmark = browser.saveCurrentPage(),
    bookmarksManager: BookmarksManager = new BookmarksManager();

bookmarksManager.addBookmark(bookmark);
browser.setCurrentPage("https://www.google.com");
browser.setCurrentPage("https://www.amazon.com");
bookmark = browser.saveCurrentPage(); 
bookmarksManager.addBookmark(bookmark);
browser.setCurrentPage("https://www.twitter.com");

console.log("Current page: " + browser.getCurrentPage());
console.log("Latest bookmark: " + bookmark.getPage());
console.log("First bookmark: " + bookmarksManager.getBookmark(0).getPage());
