import Debian from './Debian';
import RedHat from './RedHat';
import Slackware from './Slackware';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

export default class LinuxDistrosFactory {
    // We cannot use "const" inside a class in ES6.
    // Only methods are supported.
    static get DEBIAN() { return 0; }
    static get REDHAT() { return 1; }
    static get SLACKWARE() { return 2; }

    static getLinuxDistro(id) {
        // If the distro has never been instantiated, we will have to create a new object
        if (!this.activeDistros.has(id)) {
            switch (id) {
                case this.DEBIAN:
                    this.activeDistros.set(id, new Debian());
                    break;
                case this.REDHAT:
                    this.activeDistros.set(id, new RedHat());
                    break;
                case this.SLACKWARE:
                    this.activeDistros.set(id, new Slackware());
                    break;
                default:
                    throw new Error("The Linux distribution you are looking for has not been found");
            }
        }
        // If the distro has already been instantiated, we return the initial instance
        return this.activeDistros.get(id);
    }
}
LinuxDistrosFactory.activeDistros = new Map(); // Flyweights!

