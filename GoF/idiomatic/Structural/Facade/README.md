# Synopsis

I love my pets but, due to Alzheimer's disease, I often forget how to feed them. Any help would be appreciated. 

# Problem

The more pets you have, the more difficult it will be to remember the menu for each animal. Complexity can grow quite fast, which is not ideal in terms of code (re)usability. We should keep it simple, stupid (KISS).

# Solution

Facade is often used to hide the underlying complexity of a system. To implement this design pattern, we can:

  * Create an object (literal) to represent each animal
  * Create a facade that has a reference to each animal

Here the client will use the facade only, especially the main method that returns the favorite meal of each animal. No additional effort is required.

![Facade (idiomatic)](Facade.png)
