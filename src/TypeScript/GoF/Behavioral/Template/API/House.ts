import Home from './Home';

// ==============================
// CONCRETE HOME
// ==============================

export default class House extends Home {
    public foundations(): string {
        return "House foundations";
    }

    public walls(): string {
        return "House walls";
    }

    public roof(): string {
        return "House roof";
    }
}
