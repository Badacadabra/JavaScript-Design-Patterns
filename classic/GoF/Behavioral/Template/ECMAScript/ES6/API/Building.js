import Home from './Home';

// ==============================
// CONCRETE HOME
// ==============================

export default class Building extends Home {
    foundations() {
        return "Apartment building foundations";
    }

    walls() {
        return "Apartment building walls";
    }

    roof() {
        return "Apartment building roof";
    }
}
