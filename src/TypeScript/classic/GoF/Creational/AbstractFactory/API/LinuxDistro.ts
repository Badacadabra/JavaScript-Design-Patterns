// ==============================
// ABSTRACT GNU/LINUX DISTRO 
// ==============================

abstract class LinuxDistro {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootLinux(): string {
        return `${this.name} is booting...`;
    }
}

export default LinuxDistro;
