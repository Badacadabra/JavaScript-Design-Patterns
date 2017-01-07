'use strict'

# ==============================
# FACTORY OF GNU/LINUX DISTROS
# ==============================

module.exports = (name) -> 
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
