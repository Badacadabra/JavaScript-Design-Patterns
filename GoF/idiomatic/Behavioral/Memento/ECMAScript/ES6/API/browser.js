// ==============================
// ORIGINATOR (BROWSER) & MEMENTO (BOOKMARK)
// ==============================

export default {
    saveCurrentPage() {
        return {
            webpage: this.currentPage
        } 
    }
};
