'use strict'

# ==============================
# CARETAKER (BOOKMARKS MANAGER) 
# ==============================

module.exports =
    bookmarks: []
    addBookmark: (bookmark) ->
        @bookmarks.push bookmark
