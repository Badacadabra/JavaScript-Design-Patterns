// ==============================
// MEMENTO
// ==============================

export default class Bookmark {
    private webpage: string;

    constructor(webpage: string) {
        this.webpage = webpage;
    }

    public getPage(): string {
        return this.webpage;
    }
}
