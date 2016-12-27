import Bookmark from './Bookmark';

// ==============================
// ORIGINATOR 
// ==============================

export default class Browser {
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
