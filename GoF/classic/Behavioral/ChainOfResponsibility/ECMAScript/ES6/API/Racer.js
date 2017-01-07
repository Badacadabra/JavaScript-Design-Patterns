// ==============================
// ABSTRACT RACER 
// ==============================

export default class Racer {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    go() {
        let res = "";
        if (this.nextRelay === undefined) {
            res += "";
        } else {
            res += this.nextRelay.go();
        }
        return res;
    }

    setNextRelay(relay) {
        this.nextRelay = relay;
    }
}
