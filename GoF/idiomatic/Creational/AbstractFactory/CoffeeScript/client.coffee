'use strict'

getOSFactory = require './API/factories'

# ==============================
# CLIENT CODE 
# ==============================

# We can get concrete factories from the abstract factory
linuxFactory = getOSFactory 'LINUX'
macFactory = getOSFactory 'Mac'
windowsFactory = getOSFactory 'windows'

# Then we can get real objects from these concrete factories
debian = linuxFactory 'DEBIAN'
osx = macFactory 'osX'
xp = windowsFactory 'xp'

console.log debian.bootLinux() # Debian is booting...
console.log osx.bootMac() # Mac OS X is booting...
console.log xp.bootWindows() # Windows XP is booting...
