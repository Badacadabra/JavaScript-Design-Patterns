'use strict';

var Bookmark = require('./Bookmark');

// ==============================
// ORIGINATOR 
// ==============================

var Browser = function(currentPage) {
    this._currentPage = currentPage;
}

Browser.prototype.saveCurrentPage = function () {
   return new Bookmark(this._currentPage); 
};

Browser.prototype.getCurrentPage = function () {
   return this._currentPage; 
};

Browser.prototype.setCurrentPage = function (webpage) {
   this._currentPage = webpage; 
};

module.exports = Browser;
