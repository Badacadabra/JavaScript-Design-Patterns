import { Monument } from './monuments';

// ==============================
// VISITOR (TOURIST)
// ==============================

export interface Visitor {
    visit(monument: Monument): string;
}

export const tourist: Visitor = {
    visit(monument) {
        return `Visiting ${monument.name}`;
    }
};
