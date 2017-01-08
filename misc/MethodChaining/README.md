# Problem

In a program, we may have a lot of function calls on the same object. This often leads to repetition because it is necessary to write the reference again and again.

# Solution

Method Chaining allows us to make multiple calls on the same object without repeating ourselves. This pattern is very easy to use because the only thing to do is to return the current object ("this") in all methods that are supposed to be "chainable".
