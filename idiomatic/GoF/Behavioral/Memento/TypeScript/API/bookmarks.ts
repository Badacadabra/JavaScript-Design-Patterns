import { Bookmark } from './browser';

// ==============================
// CARETAKER (BOOKMARKS MANAGER)
// ==============================

export interface BookmarksManager {
    bookmarks: Bookmark[];
    addBookmark(bookmark: Bookmark): void;
}

export const bookmarksManager: BookmarksManager = {
    bookmarks: [],
    addBookmark(bookmark) {
        this.bookmarks.push(bookmark); 
    }
};
