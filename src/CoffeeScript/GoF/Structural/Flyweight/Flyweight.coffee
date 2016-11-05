"use strict"

# ==============================
# ABSTRACT GNU/LINUX DISTRO
# ==============================

class LinuxDistro
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is LinuxDistro
        @name = name

    boot: ->
        "#{@name} is booting..." # string interpolation with template literal

# ==============================
# CONCRETE GNU/LINUX DISTROS
# ==============================

# Let's say that each instance of a Linux distro will have the name of its constructor...

class Debian extends LinuxDistro
    constructor: ->
        super "Debian"

class RedHat extends LinuxDistro
    constructor: ->
        super "RedHat"

class Slackware extends LinuxDistro
    constructor: ->
        super "Slackware"

# ==============================
# FACTORY OF GNU/LINUX DISTROS
# ==============================

class LinuxDistrosFactory
    @DEBIAN: 0
    @REDHAT: 1
    @SLACKWARE: 2

    # Flyweights!
    @activeDistros: Object.create(null) # new object without prototype, like a basic map

    @getLinuxDistro: (id) ->
        # If the distro has never been instantiated, we will have to create a new object
        unless @activeDistros[id]
            switch id
                when @DEBIAN then @activeDistros[id] = new Debian()
                when @REDHAT then @activeDistros[id] = new RedHat()
                when @SLACKWARE then @activeDistros[id] = new Slackware()
                else throw new Error "The Linux distribution you are looking for has not been found"

        # If the distro has already been instantiated, we return the initial instance
        @activeDistros[id];

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN
debianAgain = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN

console.log debian.boot() # Debian is booting...
console.log debianAgain.boot() # Debian is booting...
console.log debian is debianAgain # true (the same instance has been reused)
