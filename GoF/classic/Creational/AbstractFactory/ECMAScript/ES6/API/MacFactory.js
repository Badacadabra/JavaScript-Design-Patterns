import OSFactory from './OSFactory';
import OS9 from './OS9';
import OSX from './OSX';

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

export default class MacFactory extends OSFactory {
    static get OS9() { return 0; }
    static get OSX() { return 1; }

    getMacRelease(id) {
        switch (id) {
            case MacFactory.OS9:
                return new OS9();
            case MacFactory.OSX:
                return new OSX();
            default:
                throw new Error("The Mac release you are looking for has not been found");
        }
    }
}

