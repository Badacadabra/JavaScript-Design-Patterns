// ==============================
// GNU/LINUX FACTORY
// ==============================

interface LinuxDistro {
    name?: string;
    bootLinux(): string;
}

interface LinuxFactory {
    getLinuxDistro(name: string): LinuxDistro | never;
}

const linuxFactory: LinuxFactory = {
    getLinuxDistro(name) {
        name = name.toLowerCase();

        const linuxDistro: LinuxDistro = {
            bootLinux() {
                return `${this.name} is booting...`;
            }
        };

        switch (name) {
            case "debian":
                linuxDistro.name = "Debian";
                return linuxDistro;
            case "redhat":
                linuxDistro.name = "RedHat";
                return linuxDistro;
            default:
                throw {
                    type: "Not found",
                    message: "The Linux distribution you are looking for has not been found."
                }
        }
    }
};

// ==============================
// MAC FACTORY
// ==============================

interface MacRelease {
    name?: string;
    bootMac(): string;
}

interface MacFactory {
    getMacRelease(name: string): MacRelease | never;
}

const macFactory: MacFactory= {
    getMacRelease(name) { 
        name = name.toLowerCase();

        const macRelease: MacRelease = {
            bootMac() {
                return `${this.name} is booting...`;
            }
        };

        switch (name) {
            case "os9":
                macRelease.name = "Mac OS 9";
                return macRelease;
            case "osx":
                macRelease.name = "Mac OS X";
                return macRelease;
            default:
                throw {
                    type: "Not found",
                    message: "The Mac release you are looking for has not been found."
                }
        }
    }
};

// ==============================
// WINDOWS FACTORY
// ==============================

interface WindowsVersion {
    name?: string;
    bootWindows(): string;
}

interface WindowsFactory {
    getWindowsVersion(name: string): WindowsVersion | never;
}

const windowsFactory: WindowsFactory = {
    getWindowsVersion(name) { 
        name = name.toLowerCase();

        const windowsVersion: WindowsVersion = {
            bootWindows() {
                return `${this.name} is booting...`;
            }
        };

        switch (name) {
            case "xp":
                windowsVersion.name = "Windows XP";
                return windowsVersion;
            case "vista":
                windowsVersion.name = "Windows Vista";
                return windowsVersion;
            default:
                throw {
                    type: "Not found",
                    message: "The Windows version you are looking for has not been found."
                }
        }
    }
};

// ==============================
// FACTORY OF FACTORIES 
// ==============================

interface OSFactory {
    getOSFactory(name: string): LinuxFactory | MacFactory | WindowsFactory | never; 
}

const osFactory: OSFactory = {
    getOSFactory(name) {
        name = name.toLowerCase();
        switch (name) {
            case "linux":
                return linuxFactory;
            case "mac":
                return macFactory;
            case "windows":
                return windowsFactory;
            default:
                throw {
                    type: "Not found",
                    message: "The factory you are looking for has not been found."
                }
        }
    }
};

// ==============================
// TEST
// ==============================

// We can get concrete factories from the abstract factory
let linux = <LinuxFactory> osFactory.getOSFactory('LINUX'),
    mac = <MacFactory> osFactory.getOSFactory('Mac'),
    windows = <WindowsFactory> osFactory.getOSFactory('windows');

// Then we can get real objects from these concrete factories
let debian: LinuxDistro = linux.getLinuxDistro('DEBIAN'),
    osx: MacRelease = mac.getMacRelease('osX'),
    xp: WindowsVersion = windows.getWindowsVersion('xp');

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
