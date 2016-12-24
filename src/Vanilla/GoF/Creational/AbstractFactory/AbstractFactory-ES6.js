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

    bootLinux() {
        return `${this.name} is booting...`;
    }
}

// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

class MacRelease {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    bootMac() {
        return `${this.name} is booting...`;
    }
}

// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

class WindowsVersion {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    bootWindows() {
        return `${this.name} is booting...`;
    }
}

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

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

// ==============================
// CONCRETE MAC OS RELEASES
// ==============================

class OS9 extends MacRelease {
    constructor() {
        super("Mac OS 9");
    }
}

class OSX extends MacRelease {
    constructor() {
        super("Mac OS X");
    }
}

// ==============================
// CONCRETE WINDOWS VERSIONS 
// ==============================

class XP extends WindowsVersion {
    constructor() {
        super("Windows XP");
    }
}

class Vista extends WindowsVersion {
    constructor() {
        super("Windows Vista");
    }
}

// ==============================
// ABSTRACT FACTORY OF OPERATING SYSTEMS 
// ==============================

class OSFactory {
    static get LINUX() { return 0; }
    static get MAC() { return 1; }
    static get WINDOWS() { return 2; }

    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    static getOSFactory(id) {
        switch (id) {
            case OSFactory.LINUX:
                return new LinuxFactory();
            case OSFactory.MAC:
                return new MacFactory();
            case OSFactory.WINDOWS:
                return new WindowsFactory();
            default:
                throw new Error("The factory you are looking for has not been found");
        }
    }

    getLinuxDistro(id) {
        throw new Error("You cannot call an abstract method!");
    }

    getMacRelease(id) {
        throw new Error("You cannot call an abstract method!");
    }

    getWindowsVersion(id) {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

class LinuxFactory extends OSFactory {
    static get DEBIAN() { return 0; }
    static get REDHAT() { return 1; }

    getLinuxDistro(id) {
        switch (id) {
            case LinuxFactory.DEBIAN:
                return new Debian();
            case LinuxFactory.REDHAT:
                return new RedHat();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }
}

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

class MacFactory extends OSFactory {
    static get OS9() { return 0; }
    static get OSX() { return 1; }

    getMacRelease(id) {
        switch (id) {
            case MacFactory.OS9:
                return new OS9();
            case MacFactory.OSX:
                return new OSX();
            default:
                throw new Error("The Mac release you are looking for has not been found");
        }
    }
}

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

class WindowsFactory extends OSFactory {
    static get XP() { return 0; }
    static get VISTA() { return 1; }

    getWindowsVersion(id) {
        switch (id) {
            case WindowsFactory.XP:
                return new XP();
            case WindowsFactory.VISTA:
                return new Vista();
            default:
                throw new Error("The Windows version you are looking for has not been found");
        }
    }
}

// ==============================
// CLIENT CODE 
// ==============================

// We can get a concrete factory from the abstract factory
let linuxFactory = OSFactory.getOSFactory(OSFactory.LINUX),
    macFactory = OSFactory.getOSFactory(OSFactory.MAC),
    windowsFactory = OSFactory.getOSFactory(OSFactory.WINDOWS);

// Then we can get real objects from these concrete factories
let debian = linuxFactory.getLinuxDistro(LinuxFactory.DEBIAN),
    osx = macFactory.getMacRelease(MacFactory.OSX),
    xp = windowsFactory.getWindowsVersion(WindowsFactory.XP);

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
