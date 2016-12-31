'use strict'

# ==============================
# FACTORY OF GNU/LINUX DISTROS
# ==============================

getLinuxDistro = (name) -> 
    name = name.toLowerCase()
    switch name
        when "debian"
            name: name.charAt(0).toUpperCase()
            boot: ->
                "Debian is booting..."
        when "redhat"
            name: name.charAt(0).toUpperCase()
            boot: ->
                "RedHat is booting..."
        when "slackware"
            name: name.charAt(0).toUpperCase()
            boot: ->
                "Slackware is booting..."
        else
            throw
                type: "Not found"
                message: "The Linux distribution you are looking for has not been found."

# ==============================
# TEST 
# ==============================

# Creation of our objects through the factory
debian = getLinuxDistro "DEBIAN"
redhat = getLinuxDistro "RedHat"
slackware = getLinuxDistro "slackware"

console.log debian.boot() # Debian is booting...
console.log redhat.boot() # RedHat is booting...
console.log slackware.boot() # Slackware is booting...
