import Bookmark from './Bookmark';

// ==============================
// ORIGINATOR 
// ==============================

export default class Browser {
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
