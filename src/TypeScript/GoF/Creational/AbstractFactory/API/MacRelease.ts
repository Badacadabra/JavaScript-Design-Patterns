// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

abstract class MacRelease {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bootMac(): string {
        return `${this.name} is booting...`;
    }
}
    
export default MacRelease;
