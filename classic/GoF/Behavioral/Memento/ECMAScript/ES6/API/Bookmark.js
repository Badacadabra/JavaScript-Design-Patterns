// ==============================
// MEMENTO
// ==============================

export default class Bookmark {
    constructor(webpage) {
        this._webpage = webpage;
    }

    getPage() {
        return this._webpage;
    }
}
