// ==============================
// ABSTRACT HOME 
// ==============================

abstract class Home {
    public abstract foundations(): string;
    public abstract walls(): string;
    public abstract roof(): string;

    public build(): string {
        return `
Construction of a new home:
 1. ${this.foundations()}
 2. ${this.walls()}
 3. ${this.roof()}`;
    }
}

export default Home;
