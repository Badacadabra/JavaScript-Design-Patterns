'use strict'

getLinuxDistro = require './API/factory'

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = getLinuxDistro "DEBIAN"
redhat = getLinuxDistro "RedHat"
slackware = getLinuxDistro "slackware"

console.log debian.boot() # Debian is booting...
console.log redhat.boot() # RedHat is booting...
console.log slackware.boot() # Slackware is booting...
