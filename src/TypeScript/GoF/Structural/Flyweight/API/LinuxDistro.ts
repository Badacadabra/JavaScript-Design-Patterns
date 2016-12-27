// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

abstract class LinuxDistro {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public boot(): string {
        return `${this.name} is booting...`;
    }
}

export default LinuxDistro;
