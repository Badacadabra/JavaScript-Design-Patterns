# Synopsis

I am hungry and I want to eat pizza. I take my car and go to the nearest pizzeria. After a couple of minutes looking at the menu, I do not find what I want. So I finally ask for a custom pizza that will be prepared on the fly. I am not quite sure of the ingredients I want, but let's try to make a tasty pizza!

# Problem

A custom pizza could be anything. Ingredients will be added one by one to produce something unique, depending on my choices.
Here a pizza is an object that is built at runtime, which means that we cannot have an exhaustive constructor with all possible ingredients as parameters. 

# Solution

The idea is to "augment" a basic product (such as a Margherita) with some extras (bacon, peppers, ...) using the Decorator design pattern. To make this working, we need:

  * An object literal to represent a basic pizza (Margherita)
  * Two factory functions that take a (basic or already decorated) pizza as parameter and return a new decorated pizza (with bacon or peppers)

N.B. In JavaScript, there are many ways to add new functionalities to an object. This implementation of the Decorator pattern is only one solution among an infinity of possibilities. Moreover, this pattern should not be confused with function decorators which are a bit different and serve another purpose.
