import FactoryOfFactories from './API/FactoryOfFactories';
import OSFactory from './API/OSFactory';
import LinuxFactory from './API/LinuxFactory';
import MacFactory from './API/MacFactory';
import WindowsFactory from './API/WindowsFactory';
import LinuxDistro from './API/LinuxDistro';
import MacRelease from './API/MacRelease';
import WindowsVersion from './API/WindowsVersion';

// ==============================
// CLIENT CODE 
// ==============================

// We can get a concrete factory from the abstract factory
let linuxFactory: OSFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.LINUX),
    macFactory: OSFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.MAC),
    windowsFactory: OSFactory = FactoryOfFactories.getOSFactory(FactoryOfFactories.WINDOWS);

// Then we can get real objects from these concrete factories
let debian: LinuxDistro = linuxFactory.getLinuxDistro(LinuxFactory.DEBIAN),
    osx: MacRelease = macFactory.getMacRelease(MacFactory.OSX),
    xp: WindowsVersion = windowsFactory.getWindowsVersion(WindowsFactory.XP);

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
