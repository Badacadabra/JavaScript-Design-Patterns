'use strict';

// ==============================
// ORIGINATOR (BROWSER) & MEMENTO (BOOKMARK)
// ==============================

module.exports = {
    saveCurrentPage: function () {
        return {
            webpage: this.currentPage
        };
    }
};
