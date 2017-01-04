// ==============================
// ORIGINATOR (BROWSER) & MEMENTO (BOOKMARK)
// ==============================

export interface Bookmark {
    webpage: string;
}

export interface Browser {
    currentPage?: string;
    saveCurrentPage(): Bookmark; 
}

export const browser: Browser = {
    saveCurrentPage() {
        return {
            webpage: this.currentPage
        } 
    }
};
