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

    boot() {
        return `${this.name} is booting...`; // string interpolation with template literal
    }
}

