// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

interface LinuxDistro {
    name: string;
    boot(): string;
}

interface LinuxFactory {
    getLinuxDistro(name: string): LinuxDistro | never;
}

const linuxFactory: LinuxFactory = {
    getLinuxDistro(name) {
        name = name.toLowerCase();
        switch (name) {
            case "debian":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Debian is booting...";
                    }
                }
            case "redhat":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "RedHat is booting...";
                    }
                }
            case "slackware":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Slackware is booting...";
                    }
                }
            default:
                throw {
                    type: "Not found",
                    message: "The Linux distribution you are looking for has not been found"
                }
        }
    }
};

// ==============================
// TEST 
// ==============================

// Creation of our objects through the factory
let debian: LinuxDistro = linuxFactory.getLinuxDistro("DEBIAN"),
    redhat: LinuxDistro = linuxFactory.getLinuxDistro("RedHat"),
    slackware: LinuxDistro = linuxFactory.getLinuxDistro("slackware");

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
