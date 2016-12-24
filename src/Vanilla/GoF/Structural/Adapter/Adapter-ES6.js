// ==============================
// ABSTRACT CONNECTIONS
// ==============================

class AnalogInterface {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleAnalogSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}

class DigitalInterface {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleDigitalSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
class VGA extends AnalogInterface {
    handleAnalogSignal() {
        return "Interface: VGA\nData: images\nSignal: analog\n";
    }
}

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images. The two interfaces are incompatible.
class HDMIToVGAAdapter extends DigitalInterface {
    constructor() {
        super();
        this._vga = new VGA();
    }

    handleDigitalSignal() {
        return this._vga.handleAnalogSignal();
    }
}

// ==============================
// CLIENT CODE
// ==============================

let adapter = new HDMIToVGAAdapter();

console.log(adapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
