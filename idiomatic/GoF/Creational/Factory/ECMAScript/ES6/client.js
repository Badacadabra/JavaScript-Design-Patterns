import getLinuxDistro from './API/factory';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian = getLinuxDistro("DEBIAN"),
    redhat = getLinuxDistro("RedHat"),
    slackware = getLinuxDistro("slackware");

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
