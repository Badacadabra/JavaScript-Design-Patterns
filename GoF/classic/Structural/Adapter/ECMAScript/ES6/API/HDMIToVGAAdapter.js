import DigitalInterface from './DigitalInterface';
import VGA from './VGA';

// ==============================
// CONCRETE CONNECTION
// ==============================

export default class HDMIToVGAAdapter extends DigitalInterface {
    constructor() {
        super();
        this._vga = new VGA();
    }

    handleDigitalSignal() {
        return this._vga.handleAnalogSignal();
    }
}

