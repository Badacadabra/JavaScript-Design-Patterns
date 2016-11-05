"use strict"

# ==============================
# ABSTRACT GNU/LINUX DISTRO 
# ==============================

class LinuxDistro
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is LinuxDistro
        @name = name

    bootLinux: ->
        "#{@name} is booting..."

# ==============================
# ABSTRACT MAC OS RELEASE 
# ==============================

class MacRelease
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is MacRelease
        @name = name

    bootMac: ->
        "#{@name} is booting..."

# ==============================
# ABSTRACT WINDOWS VERSION 
# ==============================

class WindowsVersion 
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is WindowsVersion
        @name = name

    bootWindows: ->
        "#{@name} is booting..."

# ==============================
# CONCRETE GNU/LINUX DISTROS
# ==============================

class Debian extends LinuxDistro
    constructor: ->
        super "Debian"

class RedHat extends LinuxDistro
    constructor: ->
        super "RedHat"

# ==============================
# CONCRETE MAC OS RELEASES
# ==============================

class OS9 extends MacRelease
    constructor: ->
        super "Mac OS 9"

class OSX extends MacRelease
    constructor: ->
        super "Mac OS X"

# ==============================
# CONCRETE WINDOWS VERSIONS 
# ==============================

class XP extends WindowsVersion
    constructor: ->
        super "Windows XP"

class Vista extends WindowsVersion
    constructor: ->
        super "Windows Vista"

# ==============================
# ABSTRACT FACTORY OF OPERATING SYSTEMS 
# ==============================

class OSFactory
    @LINUX: 0
    @MAC: 1
    @WINDOWS: 2

    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is OSFactory

    @getOSFactory: (id) ->
        switch id
            when @LINUX then new LinuxFactory
            when @MAC then new MacFactory
            when @WINDOWS then new WindowsFactory
            else throw new Error "The factory you are looking for has not been found."

    getLinuxDistro: (id) ->
        throw new Error "You cannot call an abstract method!"

    getMacRelease: (id) ->
        throw new Error "You cannot call an abstract method!"
        
    getWindowsVersion: (id) ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE GNU/LINUX FACTORY
# ==============================

class LinuxFactory extends OSFactory
    @DEBIAN: 0
    @REDHAT: 1

    getLinuxDistro: (id) ->
        switch id
            when LinuxFactory.DEBIAN then new Debian
            when LinuxFactory.REDHAT then new RedHat
            else throw new Error "The Linux distribution you are looking for has not been found."

# ==============================
# CONCRETE MAC OS FACTORY
# ==============================

class MacFactory extends OSFactory
    @OS9: 0
    @OSX: 1

    getMacRelease: (id) ->
        switch id
            when MacFactory.OS9 then new OS9
            when MacFactory.OSX then new OSX
            else throw new Error "The Mac release you are looking for has not been found."

# ==============================
# CONCRETE WINDOWS FACTORY
# ==============================

class WindowsFactory extends OSFactory
    @XP: 0
    @VISTA: 1

    getWindowsVersion: (id) ->
        switch id
            when WindowsFactory.XP then new XP
            when WindowsFactory.VISTA then new Vista
            else throw new Error "The Windows version you are looking for has not been found."

# ==============================
# CLIENT CODE 
# ==============================

# We can get concrete factories from the abstract factory
linuxFactory = OSFactory.getOSFactory OSFactory.LINUX
macFactory = OSFactory.getOSFactory OSFactory.MAC
windowsFactory = OSFactory.getOSFactory OSFactory.WINDOWS

# Then we can get real objects from these concrete factories
debian = linuxFactory.getLinuxDistro LinuxFactory.DEBIAN
osx = macFactory.getMacRelease MacFactory.OSX
xp = windowsFactory.getWindowsVersion WindowsFactory.XP

console.log debian.bootLinux() # Debian is booting...
console.log osx.bootMac() # Mac OS X is booting...
console.log xp.bootWindows() # Windows XP is booting...
