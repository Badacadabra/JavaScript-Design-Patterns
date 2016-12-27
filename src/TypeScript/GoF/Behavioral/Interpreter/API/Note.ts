import MusicNotation from './MusicNotation';
import Sonata from './Sonata';

// ==============================
// CONCRETE TERMINAL EXPRESSION
// ==============================

export default class Note extends MusicNotation {
    constructor(name: string) {
        super(name);
    }

    public interpret(sonata: Sonata): string {
        return `${sonata.getComposer()} played ${this.name}\n`;
    }
}
