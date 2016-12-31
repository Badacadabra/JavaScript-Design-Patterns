import OSFactory from './OSFactory';
import LinuxFactory from './LinuxFactory';
import MacFactory from './MacFactory';
import WindowsFactory from './WindowsFactory';

// ==============================
// FACTORY OF FACTORIES 
// ==============================

export default class FactoryOfFactories {
    public static readonly LINUX: number = 0;
    public static readonly MAC: number = 1;
    public static readonly WINDOWS: number = 2;

    public static getOSFactory(id: number): OSFactory {
        switch (id) {
            case this.LINUX:
                return new LinuxFactory();
            case this.MAC:
                return new MacFactory();
            case this.WINDOWS:
                return new WindowsFactory();
            default:
                throw new Error("The factory you are looking for has not been found");
        }
    }
}
