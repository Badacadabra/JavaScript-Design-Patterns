// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

abstract class LinuxDistro {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public boot(): string {
        return `${this.name} is booting...`;
    }
}

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

// Let's say that each instance of a Linux distro will have the name of its constructor...

class Debian extends LinuxDistro {
    constructor() {
        super("Debian");
    }
}

class RedHat extends LinuxDistro {
    constructor() {
        super("RedHat");
    }
}

class Slackware extends LinuxDistro {
    constructor() {
        super("Slackware");
    }
}

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

class LinuxDistrosFactory {
    public static readonly DEBIAN: number = 0;
    public static readonly REDHAT: number = 1;
    public static readonly SLACKWARE: number = 2;

    public static activeDistros: Map<number, LinuxDistro> = new Map(); // Flyweights!

    public static getLinuxDistro(id: number): LinuxDistro {
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

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: Debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    debianAgain: Debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN);

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same instance has been reused)
