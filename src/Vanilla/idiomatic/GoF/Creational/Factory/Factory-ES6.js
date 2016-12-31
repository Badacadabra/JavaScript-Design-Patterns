// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

const getLinuxDistro = name => {
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
};

// ==============================
// TEST 
// ==============================

// Creation of our objects through the factory
let debian = getLinuxDistro("DEBIAN"),
    redhat = getLinuxDistro("RedHat"),
    slackware = getLinuxDistro("slackware");

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
