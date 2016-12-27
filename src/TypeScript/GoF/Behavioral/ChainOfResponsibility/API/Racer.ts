// ==============================
// ABSTRACT RACER 
// ==============================

abstract class Racer {
    protected nextRelay: Racer;

    public go(): string {
        var res = "";
        if (this.nextRelay === undefined) {
            res += "";
        } else {
            res += this.nextRelay.go();
        }
        return res;
    }

    public setNextRelay(relay: Racer): void {
        this.nextRelay = relay;
    }
}

export default Racer;
