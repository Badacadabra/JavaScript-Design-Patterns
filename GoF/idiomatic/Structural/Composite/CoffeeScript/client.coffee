'use strict'

toys = require './API/toys'

# ==============================
# CLIENT CODE 
# ==============================

# Here we organize our toys in an optimal way
ball1 = toys.ball()
ball2 = toys.ball()
ball3 = toys.ball()
bigToyBox = toys.box()
smallToyBox = toys.box()

smallToyBox.add ball1
bigToyBox.add ball2
bigToyBox.add ball3
bigToyBox.add smallToyBox

# Now we open our big toy box...
console.log bigToyBox.inventory()
