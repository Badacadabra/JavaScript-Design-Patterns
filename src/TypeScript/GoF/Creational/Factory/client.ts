import LinuxDistrosFactory from './API/LinuxDistrosFactory';
import LinuxDistro from './API/LinuxDistro';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: LinuxDistro = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    redhat: LinuxDistro = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.REDHAT),
    slackware: LinuxDistro = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.SLACKWARE);

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
