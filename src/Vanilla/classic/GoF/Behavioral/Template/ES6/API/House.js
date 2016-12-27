import Home from './Home';

// ==============================
// CONCRETE HOME
// ==============================

export default class House extends Home {
    foundations() {
        return "House foundations";
    }

    walls() {
        return "House walls";
    }

    roof() {
        return "House roof";
    }
}
