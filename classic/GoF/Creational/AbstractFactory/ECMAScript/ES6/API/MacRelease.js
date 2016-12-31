// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

export default class MacRelease {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    bootMac() {
        return `${this.name} is booting...`;
    }
}

