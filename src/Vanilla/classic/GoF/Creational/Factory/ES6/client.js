import LinuxDistrosFactory from './API/LinuxDistrosFactory';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    redhat = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.REDHAT),
    slackware = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.SLACKWARE);

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
