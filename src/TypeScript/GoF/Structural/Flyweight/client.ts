import LinuxDistrosFactory from './API/LinuxDistrosFactory';
import Debian from './API/Debian';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: Debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    debianAgain: Debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN);

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same instance has been reused)
