import OSFactory from './OSFactory';
import Debian from './Debian';
import RedHat from './RedHat';

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

export default class LinuxFactory extends OSFactory {
    static get DEBIAN() { return 0; }
    static get REDHAT() { return 1; }

    getLinuxDistro(id) {
        switch (id) {
            case LinuxFactory.DEBIAN:
                return new Debian();
            case LinuxFactory.REDHAT:
                return new RedHat();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }
}

