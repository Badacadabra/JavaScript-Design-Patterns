import MusicNotation from './MusicNotation';

// ==============================
// CONCRETE (TERMINAL) EXPRESSION
// ==============================

export default class Note extends MusicNotation {
    constructor(name) {
        super(name);
    }

    interpret(sonata) {
        return `${sonata.composer} played ${this._name}\n`;
    }
}
