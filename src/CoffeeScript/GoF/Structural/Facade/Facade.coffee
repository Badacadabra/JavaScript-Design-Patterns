"use strict"

# ==============================
# ABSTRACT ANIMAL
# ==============================

class Animal
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Animal

    eat: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE ANIMALS
# ==============================

class Dog extends Animal
    eat: ->
        "Dog: 'Meat, please!'\n"

class Rabbit extends Animal
    eat: ->
        "Rabbit: 'A carrot would be great!'\n"

# ==============================
# THE FACADE 
# ==============================

class HowToFeedAnimals
    constructor: ->
        @_dog = new Dog
        @_rabbit = new Rabbit

    feedAnimals: ->
        "#{@_dog.eat()} #{@_rabbit.eat()}"

# ==============================
# CLIENT CODE
# ==============================

facade = new HowToFeedAnimals

console.log facade.feedAnimals()
