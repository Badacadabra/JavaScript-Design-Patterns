// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

export default class WindowsVersion {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    bootWindows() {
        return `${this.name} is booting...`;
    }
}

