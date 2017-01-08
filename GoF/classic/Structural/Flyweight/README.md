# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware. However, I am too busy to test all versions available. The latest version of each distro would be just fine.

# Problem

Everytime we use "new", we create a new object in JavaScript. But if we know the instance we need will always be the same (e.g. a very specific version of Debian), this is not optimal to create multiple instances that represent the same thing. Each instantiation operation has a cost in terms of performance and memory which should be minimized as much as possible.

# Solution

We can use Flyweight here, which is actually tied to Factory. A Factory handles flyweights when it reuses instances instead of constantly creating new ones. Here we have:

  * An abstract representation of a Linux distro (abstract class or interface)
  * Concrete implementations of this abstraction (Debian, RedHat, Slackware)
  * A "class" with a factory method which will be responsible for instantiation (contrary to a simple Factory method, some extra code is required to test if the wanted instance already exists or not)

![Flyweight (classic)](Flyweight.png)
