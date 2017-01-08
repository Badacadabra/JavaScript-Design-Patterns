# Synopsis

Imagine a long relay race with athletes from different sports. This race could involve several teams composed each time of a racewalker, a runner and a swimmer.

# Problem

Each sport has its own rules and each athlete will participate differently. So we cannot just evaluate the role of each athlete in the same way, even though the objective is the same for everyone within a team: the gold medal. A swimmer and a runner are both athletes, but a swimmer swims whereas a runner runs... Here we could say that each team member handles a part of the initial request which is to win the race.

Moreover, this is a relay race, not an individual one. Each athlete must know the next relay where another athlete will wait for the baton before to start.

# Solution

Everytime a request should be handled by multiple (and complementary) processing units, the Chain of Responsibility pattern seems ideal. In this case, we can represent each athlete with a simple object literal. We will have:

  * An object literal representing a walker
  * An object literal representing a runner
  * An object literal representing a swimmer

Each of these objects should have at least their own method ("go") whose action will be specific to the associated sport. But each of these particular "go" methods will also transfer some work to the next relay, chosen by the client code.

![Chain of Responsibility (idiomatic)](ChainOfResponsibility.png)

N.B. This design pattern should not be confused with simple method chaining in JavaScript.
