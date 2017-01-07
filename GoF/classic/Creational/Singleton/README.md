# Synopsis

As a person, I am unique. No one has exactly my DNA.

# Problem

In JavaScript, we can create several instances of everything using:

  * An object literal: e.g. {}
  * The static method "create" of "Object": e.g. Object.create(Object.prototype)
  * The "new" operator on a constructor function: e.g. new Object()

Therefore, I cannot be sure that there will not be other instances of myself in the code!

# Solution

Singleton is the key! To implement this pattern, we can:

  * Create a "class" with a private constructor
  * Create a static attribute that will contain the unique instance of our class
  * Create a static method that will check if the instance is unique and return it
