import { LinuxDistro, linuxFactory } from './API/flyweight';

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: LinuxDistro = linuxFactory.getLinuxDistro("DEBIAN"),
    debianAgain: LinuxDistro = linuxFactory.getLinuxDistro("debian");

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same object has been reused)
