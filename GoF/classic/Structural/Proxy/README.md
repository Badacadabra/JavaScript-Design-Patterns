# Synopsis

I need some cash, so I have to find an ATM (Automated Teller Machine).

# Problem

Money withdrawal is under control. Everyone has a personal bank account which is only accessible with a specific credit card and a related code.

For this reason, we cannot interact directly with the "real" object (our bank account). We must interact with another object that will be responsible for the communication with the real object.

# Solution

We could consider an ATM as a proxy whose aim is to verify access to a bank account. Here the Proxy design pattern requires:

  * An abstract representation of a financial entity (abstract class or interface)
  * A concrete bank account which allows some operations
  * A proxy (ATM) which secures these operations and delegates when necessary

![Proxy (classic)](Proxy.png)
