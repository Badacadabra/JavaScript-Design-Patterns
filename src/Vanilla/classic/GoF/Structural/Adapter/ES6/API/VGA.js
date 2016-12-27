import AnalogInterface from './AnalogInterface';

// ==============================
// CONCRETE CONNECTION
// ==============================

// VGA has its own interface which handles images only through an analog signal
export default class VGA extends AnalogInterface {
    handleAnalogSignal() {
        return "Interface: VGA\nData: images\nSignal: analog\n";
    }
}
