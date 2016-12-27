import OSFactory from './OSFactory';
import XP from './XP';
import Vista from './Vista';

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

export default class WindowsFactory extends OSFactory {
    static get XP() { return 0; }
    static get VISTA() { return 1; }

    getWindowsVersion(id) {
        switch (id) {
            case WindowsFactory.XP:
                return new XP();
            case WindowsFactory.VISTA:
                return new Vista();
            default:
                throw new Error("The Windows version you are looking for has not been found");
        }
    }
}

