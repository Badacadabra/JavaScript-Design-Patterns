// ==============================
// ABSTRACT GNU/LINUX DISTRO 
// ==============================

export default class LinuxDistro {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    bootLinux() {
        return `${this.name} is booting...`;
    }
}

