// ==============================
// PC (PRODUCT)
// ==============================

export default class PC {
    constructor() {
        this._motherboard = "";
        this._cpu = "";
        this._ram = "";
        this._ssd = "";
        this._nic = "";
        this._powerSupply = "";
        this._caseDesign = "";
    }

    set motherboard(part) {
        this._motherboard = part;
    }

    set cpu(part) {
        this._cpu = part;
    }

    set ram(part) {
        this._ram = part;
    }

    set ssd(part) {
        this._ssd = part;
    }

    set nic(part) {
        this._nic = part;
    }

    set powerSupply(part) {
        this._powerSupply = part;
    }

    set caseDesign(part) {
        this._caseDesign = part;
    }

    toString() {
        return `Motherboard: ${this._motherboard}
CPU: ${this._cpu}
RAM: ${this._ram}
SSD: ${this._ssd}
NIC: ${this._nic}
Power Supply: ${this._powerSupply}
Case design: ${this._caseDesign}`
    }
}

