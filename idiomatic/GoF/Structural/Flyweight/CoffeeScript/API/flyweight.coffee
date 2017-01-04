'use strict'

# ==============================
# FACTORY OF GNU/LINUX DISTROS
# ==============================

activeDistros = Object.create null # new object without prototype, like a basic map

module.exports = (name) -> 
    name = name.toLowerCase()

    if !activeDistros[name]
        switch name
            when "debian"
                linuxDistro =
                    name: name.charAt(0).toUpperCase()
                    boot: -> 
                        "Debian is booting..."
                activeDistros[name] = linuxDistro
                linuxDistro
            when "redhat"
                linuxDistro =
                    name: name.charAt(0).toUpperCase()
                    boot: -> 
                        "RedHat is booting..."
                activeDistros[name] = linuxDistro
                return linuxDistro
            when "slackware"
                linuxDistro =
                    name: name.charAt(0).toUpperCase()
                    boot: -> 
                        "Slackware is booting..."
                activeDistros[name] = linuxDistro
                linuxDistro
            else
                throw
                    type: "Not found"
                    message: "The Linux distribution you are looking for has not been found"

    # If the distro has already been instantiated, we return the initial instance
    activeDistros[name]
