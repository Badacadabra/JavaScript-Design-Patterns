// ==============================
// CONCRETE CONTEXT
// ==============================

export default class Sonata {
    private name: string;
    private composer: string;

    constructor(name: string, composer: string) {
        this.name = name;
        this.composer = composer;
    }

    public getName(): string {
        return this.name; 
    }

    public getComposer(): string {
        return this.composer; 
    }
}
