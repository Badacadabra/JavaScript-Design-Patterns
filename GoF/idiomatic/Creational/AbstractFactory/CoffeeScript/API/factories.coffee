'use strict'

# ==============================
# GNU/LINUX FACTORY
# ==============================

getLinuxDistro = (name) ->
    name = name.toLowerCase()

    linuxDistro =
        bootLinux: -> 
            "#{@name} is booting..."

    switch name
        when "debian" 
            linuxDistro.name = "Debian"
            linuxDistro
        when "redhat"
            linuxDistro.name = "RedHat"
            linuxDistro
        else
            throw
                type: "Not found"
                message: "The Linux distribution you are looking for has not been found."

# ==============================
# MAC FACTORY
# ==============================

getMacRelease = (name) ->
    name = name.toLowerCase()

    macRelease =
        bootMac: -> 
            "#{@name} is booting..."

    switch name
        when "os9"
            macRelease.name = "Mac OS 9"
            macRelease
        when "osx"
            macRelease.name = "Mac OS X"
            macRelease
        else
            throw
                type: "Not found"
                message: "The Mac release you are looking for has not been found."

# ==============================
# WINDOWS FACTORY
# ==============================

getWindowsVersion = (name) ->
    name = name.toLowerCase()

    windowsVersion =
        bootWindows: ->
            "#{@name} is booting..."

    switch name
        when "xp"
            windowsVersion.name = "Windows XP"
            windowsVersion
        when "vista"
            windowsVersion.name = "Windows Vista"
            windowsVersion
        else
            throw
                type: "Not found"
                message: "The Windows version you are looking for has not been found."

# ==============================
# FACTORY OF FACTORIES 
# ==============================

module.exports = (name) ->
    name = name.toLowerCase()
    switch name
        when "linux" then getLinuxDistro
        when "mac" then getMacRelease
        when "windows" then getWindowsVersion
        else
            throw
                type: "Not found"
                message: "The factory you are looking for has not been found."
