// ==============================
// ABSTRACT CONNECTIONS
// ==============================

interface AnalogInterface {
    handleAnalogSignal(): string;
}

interface DigitalInterface {
    handleDigitalSignal(): string;
}

// ==============================
// CONCRETE CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
class VGA implements AnalogInterface {
    public handleAnalogSignal(): string {
        return "Interface: VGA\nData: images\nSignal: analog\n";
    }
}

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images. The two interfaces are incompatible.
class HDMIToVGAAdapter implements DigitalInterface {
    private vga: VGA = new VGA();
    
    public handleDigitalSignal(): string {
        return this.vga.handleAnalogSignal();
    }
}

// ==============================
// CLIENT CODE
// ==============================

let adapter: HDMIToVGAAdapter = new HDMIToVGAAdapter();

console.log(adapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
