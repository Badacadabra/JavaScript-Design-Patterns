# ==============================
# ORIGINATOR 
# ==============================

class Browser
    constructor: (@_currentPage) ->

    saveCurrentPage: ->
       new Bookmark(@_currentPage)

    getCurrentPage: ->
       @_currentPage

    setCurrentPage: (@_currentPage) ->

# ==============================
# MEMENTO
# ==============================

class Bookmark
    constructor: (webpage) ->
        @_webpage = webpage

    getPage: ->
        @_webpage

# ==============================
# CARETAKER 
# ==============================

class BookmarksManager
    constructor: ->
        @_bookmarks = [] 

    addBookmark: (bookmark) ->
        @_bookmarks.push(bookmark)

    getBookmark: (index) ->
        @_bookmarks[index]

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
