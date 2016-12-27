import OSFactory from './OSFactory';
import WindowsVersion from './WindowsVersion';
import XP from './XP';
import Vista from './Vista';

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

export default class WindowsFactory implements OSFactory {
    public static readonly XP: number = 0;
    public static readonly VISTA: number = 1;

    public getWindowsVersion(id: number): WindowsVersion {
        switch (id) {
            case WindowsFactory.XP:
                return new XP();
            case WindowsFactory.VISTA:
                return new Vista();
            default:
                throw new Error("The Windows version you are looking for has not been found");
        }
    }

    public getLinuxDistro(id: number): never {
        throw new Error("If you want a Linux distribution, use the Linux factory.");
    }

    public getMacRelease(id: number): never {
        throw new Error("If you want a Mac release, use the Mac factory.");    
    }
}
