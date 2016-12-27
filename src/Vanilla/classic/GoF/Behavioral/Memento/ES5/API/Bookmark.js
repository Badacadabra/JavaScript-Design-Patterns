'use strict';

// ==============================
// MEMENTO
// ==============================

var Bookmark = function (webpage) {
    this._webpage = webpage;
}

Bookmark.prototype.getPage = function () {
    return this._webpage;
};

module.exports = Bookmark;
