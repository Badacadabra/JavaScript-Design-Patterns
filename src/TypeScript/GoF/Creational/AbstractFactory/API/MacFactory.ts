import OSFactory from './OSFactory';
import MacRelease from './MacRelease';
import OS9 from './OS9';
import OSX from './OSX';

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

export default class MacFactory implements OSFactory {
    public static readonly OS9: number = 0;
    public static readonly OSX: number = 1;

    public getMacRelease(id: number): MacRelease {
        switch (id) {
            case MacFactory.OS9:
                return new OS9();
            case MacFactory.OSX:
                return new OSX();
            default:
                throw new Error("The Mac release you are looking for has not been found");
        }
    }

    public getLinuxDistro(id: number): never {
        throw new Error("If you want a Linux distribution, use the Linux factory.");
    }

    public getWindowsVersion(id: number): never {
        throw new Error("If you want a Windows version, use the Windows factory.");
    }
}
