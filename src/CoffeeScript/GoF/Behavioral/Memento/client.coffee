'use strict'

Browser = require './API/Browser'
BookmarksManager = require './API/BookmarksManager'

# ==============================
# CLIENT CODE
# ==============================

browser = new Browser "http://www.badacadabra.net"
bookmark = browser.saveCurrentPage()
bookmarksManager = new BookmarksManager

bookmarksManager.addBookmark bookmark
browser.setCurrentPage "https://www.google.com"
browser.setCurrentPage "https://www.amazon.com"
bookmark = browser.saveCurrentPage()
bookmarksManager.addBookmark bookmark
browser.setCurrentPage "https://www.twitter.com"

console.log "Current page: #{browser.getCurrentPage()}"
console.log "Latest bookmark: #{bookmark.getPage()}"
console.log "First bookmark: #{bookmarksManager.getBookmark(0).getPage()}"
