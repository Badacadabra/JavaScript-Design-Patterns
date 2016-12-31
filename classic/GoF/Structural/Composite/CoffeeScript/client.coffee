'use strict'

Ball = require './API/Ball'
ToyBox = require './API/ToyBox'

# ==============================
# CLIENT CODE
# ==============================

# Here we organize our toys in an optimal way
ball1 = new Ball
ball2 = new Ball
ball3 = new Ball
bigToyBox = new ToyBox
smallToyBox = new ToyBox

smallToyBox.add ball1
bigToyBox.add ball2
bigToyBox.add ball3
bigToyBox.add smallToyBox

# Now we open our big toy box...
console.log bigToyBox.inventory()
