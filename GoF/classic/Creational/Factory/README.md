# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware.

# Problem

Debian, RedHat and Slackware are all Linux distributions.
But it is not optimal if we instantiate these classes directly in the "client code".
We will probably have lots of "new" whereas we do not want to bother with object creation logic. 
Do you really need to know how a Linux distribution has been created before using it? Of course not.

# Solution

Factory makes it possible to delegate the instantiation logic. To implement this design pattern, we need:

  * An abstract representation of a Linux distro (abstract class or interface)
  * Concrete implementations of this abstraction (Debian, RedHat, Slackware)
  * A "class" with a factory method which will be responsible for instantiation 
