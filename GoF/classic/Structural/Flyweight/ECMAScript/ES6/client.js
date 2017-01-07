import LinuxDistrosFactory from './API/LinuxDistrosFactory';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    debianAgain = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN);

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same instance has been reused)
