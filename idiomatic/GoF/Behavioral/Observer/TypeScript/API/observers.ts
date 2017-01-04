// ==============================
// OBSERVERS (PREDATORS)
// ==============================

export interface Predator {
    attack(): string;
}

export const lion: Predator = {
    attack() {
        return "Lion attack!\n"; 
    }
};

export const crocodile: Predator = {
    attack() {
        return "Crocodile attack!\n"; 
    }
};
