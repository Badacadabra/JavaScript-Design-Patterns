// ==============================
// ABSTRACT GNU/LINUX DISTRO 
// ==============================

abstract class LinuxDistro {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootLinux(): string {
        return `${this.name} is booting...`;
    }
}

// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

class MacRelease {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootMac(): string {
        return `${this.name} is booting...`;
    }
}

// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

class WindowsVersion {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootWindows(): string {
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

abstract class OSFactory {
    public static readonly LINUX: number = 0;
    public static readonly MAC: number = 1;
    public static readonly WINDOWS: number = 2;

    public static getOSFactory(id: number): OSFactory {
        switch (id) {
            case this.LINUX:
                return new LinuxFactory();
            case this.MAC:
                return new MacFactory();
            case this.WINDOWS:
                return new WindowsFactory();
            default:
                throw new Error("The factory you are looking for has not been found");
        }
    }

    public abstract getLinuxDistro(id: number): LinuxDistro | never;
    public abstract getMacRelease(id: number): MacRelease | never;
    public abstract getWindowsVersion(id: number): WindowsVersion | never;
}

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

class LinuxFactory extends OSFactory {
    public static readonly DEBIAN: number = 0;
    public static readonly REDHAT: number = 1;

    public getLinuxDistro(id: number): LinuxDistro {
        switch (id) {
            case LinuxFactory.DEBIAN:
                return new Debian();
            case LinuxFactory.REDHAT:
                return new RedHat();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }

    public getMacRelease(id: number): never {
        throw new Error("If you want a Mac release, use the Mac factory.");    
    }

    public getWindowsVersion(id: number): never {
        throw new Error("If you want a Windows version, use the Windows factory.");
    }
}

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

class MacFactory extends OSFactory {
    public static readonly OS9: number = 0;
    public static readonly OSX: number = 1;

    public getMacRelease(id: number): MacRelease {
        switch (id) {
            case MacFactory.OS9:
                return new OS9();
            case MacFactory.OSX:
                return new OSX();
            default:
                throw new Error("The Mac release you are looking for has not been found");
        }
    }

    public getLinuxDistro(id: number): never {
        throw new Error("If you want a Linux distribution, use the Linux factory.");
    }

    public getWindowsVersion(id: number): never {
        throw new Error("If you want a Windows version, use the Windows factory.");
    }
}

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

class WindowsFactory extends OSFactory {
    public static readonly XP: number = 0;
    public static readonly VISTA: number = 1;

    public getWindowsVersion(id: number): WindowsVersion {
        switch (id) {
            case WindowsFactory.XP:
                return new XP();
            case WindowsFactory.VISTA:
                return new Vista();
            default:
                throw new Error("The Windows version you are looking for has not been found");
        }
    }

    public getLinuxDistro(id: number): never {
        throw new Error("If you want a Linux distribution, use the Linux factory.");
    }

    public getMacRelease(id: number): never {
        throw new Error("If you want a Mac release, use the Mac factory.");    
    }
}

// ==============================
// CLIENT CODE 
// ==============================

// We can get a concrete factory from the abstract factory
let linuxFactory: OSFactory = OSFactory.getOSFactory(OSFactory.LINUX),
    macFactory: OSFactory = OSFactory.getOSFactory(OSFactory.MAC),
    windowsFactory: OSFactory = OSFactory.getOSFactory(OSFactory.WINDOWS);

// Then we can get real objects from these concrete factories
let debian: LinuxDistro = linuxFactory.getLinuxDistro(LinuxFactory.DEBIAN),
    osx: MacRelease = macFactory.getMacRelease(MacFactory.OSX),
    xp: WindowsVersion = windowsFactory.getWindowsVersion(WindowsFactory.XP);

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
