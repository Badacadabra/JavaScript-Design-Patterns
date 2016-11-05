"use strict"

# ==============================
# ABSTRACT GNU/LINUX DISTRO
# ==============================

class LinuxDistro
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is LinuxDistro
        @name = name

    boot: ->
        "#{@name} is booting..."

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
    @getLinuxDistro: (id) ->
        switch id
            when @DEBIAN then new Debian
            when @REDHAT then new RedHat
            when @SLACKWARE then new Slackware
            else throw new Error "The Linux distribution you are looking for has not been found"

# ==============================
# CLIENT CODE 
# ==============================

# Creation of our objects through the factory
debian = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.DEBIAN
redhat = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.REDHAT
slackware = LinuxDistrosFactory.getLinuxDistro LinuxDistrosFactory.SLACKWARE

console.log debian.boot(); # Debian is booting...
console.log redhat.boot(); # RedHat is booting...
console.log slackware.boot(); # Slackware is booting...
