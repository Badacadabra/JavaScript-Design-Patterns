// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

abstract class LinuxDistro {
    private name: string

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

    public static getLinuxDistro(id: number): LinuxDistro {
        switch (id) {
            case this.DEBIAN:
                return new Debian();
            case this.REDHAT:
                return new RedHat();
            case this.SLACKWARE:
                return new Slackware();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }
}

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
let debian: Debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    redhat: RedHat = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.REDHAT),
    slackware: Slackware = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.SLACKWARE);

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
