// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

class LinuxDistro {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._name = name;
    }

    boot() {
        return `${this._name} is booting...`; // string interpolation with template literal
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
        // If the distro has never been instantiated, we will have to create a new object
        if (!this.activeDistros.has(id)) {
            switch (id) {
                case this.DEBIAN:
                    this.activeDistros.set(id, new Debian());
                    break;
                case this.REDHAT:
                    this.activeDistros.set(id, new RedHat());
                    break;
                case this.SLACKWARE:
                    this.activeDistros.set(id, new Slackware());
                    break;
                default:
                    throw new Error("The Linux distribution you are looking for has not been found");
            }
        }
        // If the distro has already been instantiated, we return the initial instance
        return this.activeDistros.get(id);
    }
}
LinuxDistrosFactory.activeDistros = new Map(); // Flyweights!

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    debianAgain = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN);

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same instance has been reused)
