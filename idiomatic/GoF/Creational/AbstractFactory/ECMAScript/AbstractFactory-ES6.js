// ==============================
// GNU/LINUX FACTORY
// ==============================

const getLinuxDistro = name => {
    name = name.toLowerCase();

    const linuxDistro = {
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
                message: "The Linux distribution you are looking for has not been found"
            }
    }
};

// ==============================
// MAC FACTORY
// ==============================

const getMacRelease = name => {
    name = name.toLowerCase();

    const macRelease = {
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
                message: "The Mac release you are looking for has not been found"
            }
    }
};

// ==============================
// WINDOWS FACTORY
// ==============================

const getWindowsVersion = name => {
    name = name.toLowerCase();

    const windowsVersion = {
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
                message: "The Windows version you are looking for has not been found"
            }
    }
};

// ==============================
// FACTORY OF FACTORIES 
// ==============================

const getOSFactory = name => {
    name = name.toLowerCase();
    switch (name) {
        case "linux":
            return getLinuxDistro;
        case "mac":
            return getMacRelease;
        case "windows":
            return getWindowsVersion;
        default:
            throw {
                type: "Not found",
                message: "The factory you are looking for has not been found"
            }
    }
};

// ==============================
// TEST
// ==============================

// We can get concrete factories from the abstract factory
let linuxFactory = getOSFactory('LINUX'),
    macFactory = getOSFactory('Mac'),
    windowsFactory = getOSFactory('windows');

// Then we can get real objects from these concrete factories
let debian = linuxFactory('DEBIAN'),
    osx = macFactory('osX'),
    xp = windowsFactory('xp');

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
