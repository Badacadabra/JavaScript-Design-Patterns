'use strict'

LinuxDistrosFactory = require './API/LinuxDistrosFactory'

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN
debianAgain = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN

console.log debian.boot() # Debian is booting...
console.log debianAgain.boot() # Debian is booting...
console.log debian is debianAgain # true (the same instance has been reused)
