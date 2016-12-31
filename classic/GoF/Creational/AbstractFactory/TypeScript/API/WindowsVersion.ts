// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

abstract class WindowsVersion {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootWindows(): string {
        return `${this.name} is booting...`;
    }
}

export default WindowsVersion; 
