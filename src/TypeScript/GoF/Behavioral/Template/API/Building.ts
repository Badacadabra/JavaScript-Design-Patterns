import Home from './Home';

// ==============================
// CONCRETE HOME
// ==============================

export default class Building extends Home {
    public foundations(): string {
        return "Apartment building foundations";
    }

    public walls(): string {
        return "Apartment building walls";
    }

    public roof(): string {
        return "Apartment building roof";
    }
}
