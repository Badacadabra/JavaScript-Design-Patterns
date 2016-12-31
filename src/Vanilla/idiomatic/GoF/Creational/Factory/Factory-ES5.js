'use strict';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

var getLinuxDistro = function (name) {
    name = name.toLowerCase();
    switch (name) {
        case "debian":
            return {
                name: name.charAt(0).toUpperCase(),
                boot: function () {
                    return "Debian is booting...";
                }
            }
        case "redhat":
            return {
                name: name.charAt(0).toUpperCase(),
                boot: function () {
                    return "RedHat is booting...";
                }
            }
        case "slackware":
            return {
                name: name.charAt(0).toUpperCase(),
                boot: function () {
                    return "Slackware is booting...";
                }
            }
        default:
            throw {
                type: "Not found",
                message: "The Linux distribution you are looking for has not been found."
            }
    }
};

// ==============================
// TEST 
// ==============================

// Creation of our objects through the factory
var debian = getLinuxDistro("DEBIAN"),
    redhat = getLinuxDistro("RedHat"),
    slackware = getLinuxDistro("slackware");

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
