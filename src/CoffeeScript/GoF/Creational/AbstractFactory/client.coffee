'use strict'

FactoryOfFactories = require './API/FactoryOfFactories'
LinuxFactory = require './API/LinuxFactory'
MacFactory = require './API/MacFactory'
WindowsFactory = require './API/WindowsFactory'

# ==============================
# CLIENT CODE 
# ==============================

# We can get concrete factories from the abstract factory
linuxFactory = FactoryOfFactories.getOSFactory FactoryOfFactories.LINUX
macFactory = FactoryOfFactories.getOSFactory FactoryOfFactories.MAC
windowsFactory = FactoryOfFactories.getOSFactory FactoryOfFactories.WINDOWS

# Then we can get real objects from these concrete factories
debian = linuxFactory.getLinuxDistro LinuxFactory.DEBIAN
osx = macFactory.getMacRelease MacFactory.OSX
xp = windowsFactory.getWindowsVersion WindowsFactory.XP

console.log debian.bootLinux() # Debian is booting...
console.log osx.bootMac() # Mac OS X is booting...
console.log xp.bootWindows() # Windows XP is booting...
