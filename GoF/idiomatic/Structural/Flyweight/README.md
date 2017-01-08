# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware. However, I am too busy to test all versions available. The latest version of each distro would be just fine.

# Problem

Everytime we use an object literal, we create a new object in JavaScript. But if we know the instance we need will always be the same (e.g. a very specific version of Debian), this is not optimal to create multiple instances that represent the same thing. Each instantiation operation has a cost in terms of performance and memory which should be minimized as much as possible.

# Solution

We can use Flyweight here, which is actually tied to Factory. A Factory handles flyweights when it reuses instances instead of constantly creating new ones. To do so, we generally use a Map or an object without prototype in the factory function. The first instance of a specific type created by the factory is always saved in this data structure and then reused in all subsequent calls.
