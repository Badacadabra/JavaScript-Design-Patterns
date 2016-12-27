import OSFactory from './OSFactory';
import LinuxDistro from './LinuxDistro';
import Debian from './Debian';
import RedHat from './RedHat';

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

export default class LinuxFactory implements OSFactory {
    public static readonly DEBIAN: number = 0;
    public static readonly REDHAT: number = 1;

    public getLinuxDistro(id: number): LinuxDistro {
        switch (id) {
            case LinuxFactory.DEBIAN:
                return new Debian();
            case LinuxFactory.REDHAT:
                return new RedHat();
            default:
                throw new Error("The Linux distribution you are looking for has not been found");
        }
    }

    public getMacRelease(id: number): never {
        throw new Error("If you want a Mac release, use the Mac factory.");    
    }

    public getWindowsVersion(id: number): never {
        throw new Error("If you want a Windows version, use the Windows factory.");
    }
}
