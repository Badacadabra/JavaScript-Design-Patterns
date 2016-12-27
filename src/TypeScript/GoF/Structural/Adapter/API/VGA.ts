import AnalogInterface from './AnalogInterface';

// ==============================
// CONCRETE CONNECTION
// ==============================

// VGA has its own interface which handles images only through an analog signal
export default class VGA implements AnalogInterface {
    public handleAnalogSignal(): string {
        return "Interface: VGA\nData: images\nSignal: analog\n";
    }
}
