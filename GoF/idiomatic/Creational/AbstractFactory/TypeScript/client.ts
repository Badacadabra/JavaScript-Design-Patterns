import { osFactory, LinuxFactory, MacFactory, WindowsFactory, LinuxDistro, MacRelease, WindowsVersion } from './API/factories';

// ==============================
// CLIENT CODE 
// ==============================

// We can get concrete factories from the abstract factory
let linux = <LinuxFactory> osFactory.getOSFactory('LINUX'),
    mac = <MacFactory> osFactory.getOSFactory('Mac'),
    windows = <WindowsFactory> osFactory.getOSFactory('windows');

// Then we can get real objects from these concrete factories
let debian: LinuxDistro = linux.getLinuxDistro('DEBIAN'),
    osx: MacRelease = mac.getMacRelease('osX'),
    xp: WindowsVersion = windows.getWindowsVersion('xp');

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
