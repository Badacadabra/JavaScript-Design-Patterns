// ==============================
// HOMES 
// ==============================

export interface Home {
    foundations(): string;
    walls(): string;
    roof(): string;
}

export const house: Home = {
    foundations() {
        return "House foundations";
    },
    walls() {
        return "House walls";
    },
    roof() {
        return "House roof";
    }
};

export const building: Home = {
    foundations() {
        return "Apartment building foundations";
    },
    walls() {
        return "Apartment building walls";
    },
    roof() {
        return "Apartment building roof";
    }
};
