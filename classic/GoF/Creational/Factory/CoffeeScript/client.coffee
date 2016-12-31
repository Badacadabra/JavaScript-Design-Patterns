'use strict'

LinuxDistrosFactory = require './API/LinuxDistrosFactory'

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN
redhat = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.REDHAT
slackware = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.SLACKWARE

console.log debian.boot() # Debian is booting...
console.log redhat.boot() # RedHat is booting...
console.log slackware.boot() # Slackware is booting...
