'use strict'

# ==============================
# ABSTRACT GNU/LINUX DISTRO
# ==============================

class LinuxDistro
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is LinuxDistro
        @name = name

    boot: ->
        "#{@name} is booting..." # string interpolation with template literal

module.exports = LinuxDistro
