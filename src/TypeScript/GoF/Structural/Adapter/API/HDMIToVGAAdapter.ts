import DigitalInterface from './DigitalInterface';
import VGA from './VGA';

// ==============================
// CONCRETE CONNECTION
// ==============================

export default class HDMIToVGAAdapter implements DigitalInterface {
    private vga: VGA = new VGA();
    
    public handleDigitalSignal(): string {
        return this.vga.handleAnalogSignal();
    }
}
