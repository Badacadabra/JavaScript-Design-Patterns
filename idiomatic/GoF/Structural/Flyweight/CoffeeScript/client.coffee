'use strict'

getLinuxDistro = require './API/flyweight'

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = getLinuxDistro "DEBIAN"
debianAgain = getLinuxDistro "debian"

console.log debian.boot() # Debian is booting...
console.log debianAgain.boot() # Debian is booting...
console.log debian is debianAgain # true (the same object has been reused)
