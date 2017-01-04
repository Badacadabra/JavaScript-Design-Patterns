'use strict';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

module.exports = function (name) {
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
