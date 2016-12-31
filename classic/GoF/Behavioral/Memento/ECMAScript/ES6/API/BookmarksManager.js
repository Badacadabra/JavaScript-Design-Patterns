// ==============================
// CARETAKER 
// ==============================

export default class BookmarksManager {
    constructor() {
        this._bookmarks = []; 
    }

    addBookmark(bookmark) {
        this._bookmarks.push(bookmark);
    }

    getBookmark(index) {
        return this._bookmarks[index];
    }
}
