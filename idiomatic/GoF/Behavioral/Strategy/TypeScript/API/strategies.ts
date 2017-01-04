// ==============================
// STRATEGIES 
// ==============================

export interface Strategy {
    fight(): string;
}

export const offense: Strategy = {
    fight() {
        return "Fight with an offensive style";
    }
};

export const defense: Strategy = {
    fight() {
        return "Fight with a defensive style";
    }
};
