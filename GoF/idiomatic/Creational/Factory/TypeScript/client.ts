import { linuxFactory, LinuxDistro } from './API/factory';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: LinuxDistro = linuxFactory.getLinuxDistro("DEBIAN"),
    redhat: LinuxDistro = linuxFactory.getLinuxDistro("RedHat"),
    slackware: LinuxDistro = linuxFactory.getLinuxDistro("slackware");

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
