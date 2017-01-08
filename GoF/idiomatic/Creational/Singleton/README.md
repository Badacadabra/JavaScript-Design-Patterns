# Synopsis

As a person, I am unique. No one has exactly my DNA.

# Problem

In JavaScript, we can create several instances of everything using:

  * An object literal: e.g. {}
  * The static method "create" of "Object": e.g. Object.create(Object.prototype)
  * The "new" operator on a constructor function: e.g. new Object()

Therefore, I cannot be sure that there will not be other instances of myself in the code!

# Solution

Singleton is the key!

But due to the nature of JavaScript, an object literal is already a sort of Singleton. Each object literal is unique and is built from the prototype of Object. In a way, we could see an object literal as a an anonymous class whose instance is delivered immediately. However, we could also argue that an object literal is nothing more than an instance of Object, which is actually true. With this in mind, it is quite obvious that an object literal is not a pure Singleton, but if flexibility matters, it is quite reasonable to consider it as a Singleton.
