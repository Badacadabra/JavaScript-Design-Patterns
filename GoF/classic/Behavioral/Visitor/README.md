# Synopsis

I love history and I would like to visit more old monuments. But these are treasures of the past that must be protected to remain undamaged.

# Problem

If any individual can enter a historical monument and degrade it, we can say that the original structure is definitely lost. To preserve that structure, people should not be allowed to enter historical monuments without permission and supervision.

Applied to JavaScript, we could say this is very easy to modify directly the structure of an object and we may be tempted to do so. But this is not what we want...

# Solution

The Visitor design pattern is a way to preserve an object structure. Operations on this object structure are still possible but they are kept separate to some extent, so they do not modify its essence.

To implement the Visitor design pattern, we need:

  * An abstract representation of a visitor (abstract class or interface)
  * An abstract representation of a historical monument (abstract class or interface)
  * A concrete visitor (Tourist)
  * Concrete historical monuments (Castle & Abbey)

![Visitor (classic)](Visitor.png)
