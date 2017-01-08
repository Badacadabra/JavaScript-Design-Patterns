# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware.

# Problem

Debian, RedHat and Slackware are all Linux distributions.
We could create directly an object literal to represent each one, but this is not necessarily the best choice.
We are not sure to use each instance in our code and we do not want to use memory for nothing.
For the sake of clarity and performance, it may be nice to delegate the instantiation logic.

# Solution

Factory makes it possible to do so. To implement this design pattern, we only need to create a function that will return objects.

In JavaScript, a function or method that returns objects is generally considered as a factory. It is a well-known idiomatic alternative to the use of the "new" keyword along with constructor functions.

![Factory (idiomatic)](Factory.png)
