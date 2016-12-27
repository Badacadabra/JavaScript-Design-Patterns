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

    public static activeDistros: Map<number, LinuxDistro> = new Map(); // Flyweights!

    public static getLinuxDistro(id: number): LinuxDistro {
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
