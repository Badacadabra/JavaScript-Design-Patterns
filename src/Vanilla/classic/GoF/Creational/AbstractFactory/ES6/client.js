import FactoryOfFactories from './API/FactoryOfFactories';
import LinuxFactory from './API/LinuxFactory';
import MacFactory from './API/MacFactory';
import WindowsFactory from './API/WindowsFactory';

// ==============================
// CLIENT CODE 
// ==============================

// We can get a concrete factory from the abstract factory
let linuxFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.LINUX),
    macFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.MAC),
    windowsFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.WINDOWS);

// Then we can get real objects from these concrete factories
let debian = linuxFactory.getLinuxDistro(LinuxFactory.DEBIAN),
    osx = macFactory.getMacRelease(MacFactory.OSX),
    xp = windowsFactory.getWindowsVersion(WindowsFactory.XP);

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
