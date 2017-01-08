# Synopsis

I found an interesting article on the Web and I would like to save it in my browser for later reading. For some reasons, I always use private browsing.

# Problem

With private browsing, history is not kept by the browser. Of course we can use back and forward buttons to navigate in the current history during the browsing session, but with this technique, it would not be possible to identify easily our favorite webpages. Furthermore, interesting webpages would not be there anymore if we close the browser and open it again.

# Solution

Here we have to use bookmarks to save interesting webpages and the Memento pattern allows us to simulate that behavior. We can implement this pattern using: 

  * An object literal with a "saveCurrentPage" method to represent the browser (this is the "originator")
  * An object literal containing a collection (array) of bookmarks (this is the "caretaker")

When the "saveCurrentPage" method is called, a new bookmark (memento) is created and this one can be stored by the bookmarks manager.

![Memento (idiomatic)](Memento.png)
