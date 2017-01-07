# Problem

Functions may have a high arity, which means that they can accept a lot of arguments. This is not optimal for at least two reasons:

  1. Keeping a nice-looking indentation is hard if the list of parameters is really long
  2. It is difficult for the programmer to remember the order of many positional parameters 

# Solution

An object specifier (a.k.a. options object) is a simple object literal that is passed to a function instead of a long series of arguments. In other words, when a function has lots of formal parameters in its signature, it is generally a good idea to refactor it and give it only one parameter (that will be the object specifier). The good point with this pattern is that it allows named parameters instead of positional parameters, so that the order is not even a problem anymore.
