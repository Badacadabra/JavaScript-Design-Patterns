# Problem

Functions may have a high arity, which means that they can accept a lot of arguments. This is not optimal for at least two reasons:

  1. Keeping a nice-looking indentation is hard if the list of parameters is really long
  2. It is difficult for the programmer to remember the order of many positional parameters 

# Solution

We can use currying to reduce the arity of a function. The aim of this pattern is to transform a function with many parameters into multiple functions with only one parameter.
Since JavaScript is an extremely flexible language, the only thing to do is to create a sort of "return chain" where each function returns another function (with only one parameter) until the number of parameters is exhausted.
