'use strict';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

var activeDistros = Object.create(null); // new object without prototype, like a basic map

module.exports = function (name) {
    name = name.toLowerCase();

    var linuxDistro;

    if (!activeDistros[name]) {
        switch (name) {
            case "debian":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot: function () {
                        return "Debian is booting...";
                    }
                };
                activeDistros[name] = linuxDistro;
                return linuxDistro;
            case "redhat":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot: function () {
                        return "RedHat is booting...";
                    }
                };
                activeDistros[name] = linuxDistro;
                return linuxDistro;
            case "slackware":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot: function () {
                        return "Slackware is booting...";
                    }
                };
                activeDistros[name] = linuxDistro;
                return linuxDistro;
            default:
                throw {
                    type: "Not found",
                    message: "The Linux distribution you are looking for has not been found."
                }
        }
    }
    // If the distro has already been instantiated, we return the initial instance
    return activeDistros[name];
};
