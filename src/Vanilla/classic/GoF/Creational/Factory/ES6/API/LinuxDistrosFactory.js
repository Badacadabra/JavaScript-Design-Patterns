import Debian from './Debian';
import RedHat from './RedHat';
import Slackware from './Slackware';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

export default class LinuxDistrosFactory {
    static get DEBIAN() { return 0; }
    static get REDHAT() { return 1; }
    static get SLACKWARE() { return 2; }

    static getLinuxDistro(id) {
        switch (id) {
            case LinuxDistrosFactory.DEBIAN:
                return new Debian();
            case LinuxDistrosFactory.REDHAT:
                return new RedHat();
            case LinuxDistrosFactory.SLACKWARE:
                return new Slackware();
            default:
                throw new Error("The Linux distribution you are looking for has not been found.");
        }
    }
}

