// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

class LinuxDistro {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    boot() {
        return `${this.name} is booting...`; // string interpolation with template literal
    }
}

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

// Let's say that each instance of a Linux distro will have the name of its constructor...

class Debian extends LinuxDistro {
    constructor() {
        super(Debian.name);
    }
}

class RedHat extends LinuxDistro {
    constructor() {
        super(RedHat.name);
    }
}

class Slackware extends LinuxDistro {
    constructor() {
        super(Slackware.name);
    }
}

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

class LinuxDistrosFactory {
    // We cannot use "const" inside a class in ES6.
    // Only methods are supported.
    static get DEBIAN() { return 0; }
    static get REDHAT() { return 1; }
    static get SLACKWARE() { return 2; }

    static getLinuxDistro(id) {
        switch (id) {
            case LinuxDistrosFactory.DEBIAN:
                return new Debian();
            case LinuxDistrosFactory.REDHAT:
                return new RedHat();
            case LinuxDistrosFactory.SLACKWARE:
                return new Slackware();
            default:
                throw new Error("The Linux distribution you are looking for has not been found.");
        }
    }
}

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
