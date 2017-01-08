# Synopsis

I do not know what to eat for dinner. In my kitchen, I think I have pasta and rice with some sauces, especially pesto and carbonara.

# Problem

Even in this very simple situation, they are already four recipes that could be great. I can eat pasta with pesto, pasta with carbonara, risotto with pesto, or risotto with carbonara.

To represent that with code, we might be tempted to create an object (literal) for each possible recipe (pastaWithPesto, pastaWithCarbonara, risottoWithPesto, risottoWithCarbonara). But imagine that, a couple of minutes later, you also find potatoes and a tomato sauce in the kitcken. Do you really want to create new objects such as potatoesWithCarbonara, pastaWithTomato and so on?

# Solution

The best solution is to use a "Bridge" between a simple recipe and a sauce. This means that we will be able to select the sauce independently. To do so, we may have:

  * Factory methods to create different kinds of recipes with given sauces (a sauce is a parameter) 
  * Object (literals) to describe available sauces

In the client code, the instance of sauce passed to the recipe function will give us the final meal.
