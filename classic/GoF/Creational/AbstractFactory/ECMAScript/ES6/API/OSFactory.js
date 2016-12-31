// ==============================
// ABSTRACT FACTORY OF OPERATING SYSTEMS 
// ==============================

export default class OSFactory {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    getLinuxDistro(id) {
        throw new Error("You cannot call an abstract method!");
    }

    getMacRelease(id) {
        throw new Error("You cannot call an abstract method!");
    }

    getWindowsVersion(id) {
        throw new Error("You cannot call an abstract method!");
    }
}

