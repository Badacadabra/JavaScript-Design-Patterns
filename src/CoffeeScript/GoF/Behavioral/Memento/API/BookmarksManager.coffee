'use strict'

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

module.exports = BookmarksManager
