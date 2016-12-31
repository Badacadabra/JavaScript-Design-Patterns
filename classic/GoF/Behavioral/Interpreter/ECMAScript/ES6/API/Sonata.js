// ==============================
// CONCRETE CONTEXT
// ==============================

export default class Sonata {
    constructor(name, composer) {
        this._name = name;
        this._composer = composer;
    }

    get name() {
        return this._name; 
    };

    get composer() {
        return this._composer; 
    };
}
