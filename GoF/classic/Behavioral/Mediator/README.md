# Synopsis

Tom and Dick are neighbors. Dick makes a lot of noise on Sunday mornings, which drives Tom crazy. Communication has become difficult between them because of this.

# Problem

If Tom and Dick cannot talk to each other directly, Dick will continue to make noise and Tom will get angry every Sunday.

# Solution

When communication is difficult between two objects or in a system (here the neighborhood), the solution is delegation to a third-party object. This object will make communication easier between all other objects.

This is exactly the solution proposed by the Mediator pattern. To implement this pattern, we need:

  * An abstract representation of a neighbor (abstract class should be preferred because it centralizes the reference to the mediator)
  * An abstract representation of a neighborhood mediator (abstract class or interface)
  * Concrete neighbors (Tom and Dick)
  * A concrete mediator (Harry)
