// ==============================
// GNU/LINUX FACTORY
// ==============================

export interface LinuxDistro {
    name?: string;
    bootLinux(): string;
}

export interface LinuxFactory {
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

export interface MacRelease {
    name?: string;
    bootMac(): string;
}

export interface MacFactory {
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

export interface WindowsVersion {
    name?: string;
    bootWindows(): string;
}

export interface WindowsFactory {
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

export interface OSFactory {
    getOSFactory(name: string): LinuxFactory | MacFactory | WindowsFactory | never; 
}

export const osFactory: OSFactory = {
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
