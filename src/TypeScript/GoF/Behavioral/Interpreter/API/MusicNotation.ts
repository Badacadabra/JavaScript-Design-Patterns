import Sonata from './Sonata';

// ==============================
// ABSTRACT EXPRESSION
// ==============================

abstract class MusicNotation {
    protected name: string;

    constructor(name: string) {
        this.name = name; 
    }

    public abstract interpret(sonata: Sonata): string;
}

export default MusicNotation; 
