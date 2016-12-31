'use strict'

# ==============================
# ANIMALS
# ==============================

dog =
    eat: -> 
        "Dog: 'Meat, please!'\n"

rabbit =
    eat: ->
        "Rabbit: 'A carrot would be great!'\n"

# ==============================
# THE FACADE 
# ==============================

facade =
    dog: dog
    rabbit: rabbit
    feedAnimals: -> 
        "#{@dog.eat()}#{@rabbit.eat()}"

# ==============================
# TEST
# ==============================

console.log facade.feedAnimals()
