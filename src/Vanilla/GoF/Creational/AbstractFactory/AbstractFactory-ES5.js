'use strict';

// ==============================
// ABSTRACT GNU/LINUX DISTRO 
// ==============================

var LinuxDistro = function (name) {
    if (this.constructor === LinuxDistro) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

LinuxDistro.prototype.bootLinux = function () {
    return this.name + " is booting...";
};

// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

var MacRelease = function (name) {
    if (this.constructor === MacRelease) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

MacRelease.prototype.bootMac = function () {
    return this.name + " is booting...";
};

// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

var WindowsVersion = function (name) {
    if (this.constructor === WindowsVersion) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

WindowsVersion.prototype.bootWindows = function () {
    return this.name + " is booting...";
};

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

var Debian = function () {
    LinuxDistro.call(this, "Debian");
};
Debian.prototype = Object.create(LinuxDistro.prototype);
Debian.prototype.constructor = Debian;

var RedHat = function () {
    LinuxDistro.call(this, "RedHat");
};
RedHat.prototype = Object.create(LinuxDistro.prototype);
RedHat.prototype.constructor = RedHat;

// ==============================
// CONCRETE MAC OS RELEASES
// ==============================

var OS9 = function () {
    MacRelease.call(this, "Mac OS 9");
};
OS9.prototype = Object.create(MacRelease.prototype);
OS9.prototype.constructor = OS9;

var OSX = function () {
    MacRelease.call(this, "Mac OS X");
};
OSX.prototype = Object.create(MacRelease.prototype);
OSX.prototype.constructor = OSX;

// ==============================
// CONCRETE WINDOWS VERSIONS 
// ==============================

var XP = function () {
    WindowsVersion.call(this, "Windows XP");
};
XP.prototype = Object.create(WindowsVersion.prototype);
XP.prototype.constructor = XP;

var Vista = function () {
    WindowsVersion.call(this, "Windows Vista");
};
Vista.prototype = Object.create(WindowsVersion.prototype);
Vista.prototype.constructor = Vista;

// ==============================
// ABSTRACT FACTORY OF OPERATING SYSTEMS 
// ==============================

var OSFactory = function () {
    if (this.constructor === OSFactory) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

Object.defineProperties(OSFactory, {
    "LINUX": {
        value: 0,
        enumerable: true
    },
    "MAC": {
        value: 1,
        enumerable: true
    },
    "WINDOWS": {
        value: 2,
        enumerable: true
    },
    "getOSFactory": {
        value: function (id) {
            switch (id) {
                case OSFactory.LINUX:
                    return new LinuxFactory();
                case OSFactory.MAC:
                    return new MacFactory();
                case OSFactory.WINDOWS:
                    return new WindowsFactory();
                default:
                    throw new Error("The factory you are looking for has not been found.");
            }
        },
        enumerable: true
    }
});

OSFactory.prototype = {
    getLinuxDistro: function (id) {
        throw new Error("You cannot call an abstract method!");
    },
    getMacRelease: function (id) {
        throw new Error("You cannot call an abstract method!");
    },
    getWindowsVersion: function (id) {
        throw new Error("You cannot call an abstract method!");
    }
};

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

var LinuxFactory = function () {};
LinuxFactory.prototype = Object.create(OSFactory.prototype);
LinuxFactory.prototype.constructor = LinuxFactory;

Object.defineProperties(LinuxFactory, {
    "DEBIAN": {
        value: 0,
        enumerable: true
    },
    "REDHAT": {
        value: 1,
        enumerable: true
    }
});

LinuxFactory.prototype.getLinuxDistro = function (id) {
    switch (id) {
        case LinuxFactory.DEBIAN:
            return new Debian();
        case LinuxFactory.REDHAT:
            return new RedHat();
        default:
            throw new Error("The Linux distribution you are looking for has not been found.");
    }
};

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

var MacFactory = function () {};
MacFactory.prototype = Object.create(OSFactory.prototype);
MacFactory.prototype.constructor = MacFactory;

Object.defineProperties(MacFactory, {
    "OS9": {
        value: 0,
        enumerable: true
    },
    "OSX": {
        value: 1,
        enumerable: true
    }
});

MacFactory.prototype.getMacRelease = function (id) {
    switch (id) {
        case MacFactory.OS9:
            return new OS9();
        case MacFactory.OSX:
            return new OSX();
        default:
            throw new Error("The Mac release you are looking for has not been found.");
    }
};

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

var WindowsFactory = function () {};
WindowsFactory.prototype = Object.create(OSFactory.prototype);
WindowsFactory.prototype.constructor = WindowsFactory;

Object.defineProperties(WindowsFactory, {
    "XP": {
        value: 0,
        enumerable: true
    },
    "VISTA": {
        value: 1,
        enumerable: true
    }
});

WindowsFactory.prototype.getWindowsVersion = function (id) {
    switch (id) {
        case WindowsFactory.XP:
            return new XP();
        case WindowsFactory.VISTA:
            return new Vista();
        default:
            throw new Error("The Windows version you are looking for has not been found.");
    }
};

// ==============================
// CLIENT CODE 
// ==============================

// We can get concrete factories from the abstract factory
var linuxFactory = OSFactory.getOSFactory(OSFactory.LINUX),
    macFactory = OSFactory.getOSFactory(OSFactory.MAC),
    windowsFactory = OSFactory.getOSFactory(OSFactory.WINDOWS);

// Then we can get real objects from these concrete factories
var debian = linuxFactory.getLinuxDistro(LinuxFactory.DEBIAN),
    osx = macFactory.getMacRelease(MacFactory.OSX),
    xp = windowsFactory.getWindowsVersion(WindowsFactory.XP);

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
