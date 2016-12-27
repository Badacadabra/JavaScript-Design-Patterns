import Bookmark from './Bookmark';

// ==============================
// CARETAKER 
// ==============================

export default class BookmarksManager {
    private bookmarks: Bookmark[] = [];

    public addBookmark(bookmark: Bookmark): void {
        this.bookmarks.push(bookmark);
    }

    public getBookmark(index: number): Bookmark {
        return this.bookmarks[index];
    }
}
