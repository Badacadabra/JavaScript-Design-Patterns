import LinuxDistro from './LinuxDistro';
import Debian from './Debian';
import RedHat from './RedHat';
import Slackware from './Slackware';

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

export default class LinuxDistrosFactory {
    public static readonly DEBIAN: number = 0;
    public static readonly REDHAT: number = 1;
    public static readonly SLACKWARE: number = 2;

    public static getLinuxDistro(id: number): LinuxDistro {
        switch (id) {
            case this.DEBIAN:
                return new Debian();
            case this.REDHAT:
                return new RedHat();
            case this.SLACKWARE:
                return new Slackware();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }
}
