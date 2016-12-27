import LinuxFactory from './LinuxFactory';
import MacFactory from './MacFactory';
import WindowsFactory from './WindowsFactory';

// ==============================
// FACTORY OF FACTORIES 
// ==============================

export default class FactoryOfFactories {
    static get LINUX() { return 0; }
    static get MAC() { return 1; }
    static get WINDOWS() { return 2; }

    static getOSFactory(id) {
        switch (id) {
            case FactoryOfFactories.LINUX:
                return new LinuxFactory();
            case FactoryOfFactories.MAC:
                return new MacFactory();
            case FactoryOfFactories.WINDOWS:
                return new WindowsFactory();
            default:
                throw new Error("The factory you are looking for has not been found");
        }
    }
}

