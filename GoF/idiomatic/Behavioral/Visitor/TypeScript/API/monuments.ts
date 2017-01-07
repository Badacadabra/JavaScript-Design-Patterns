import { Visitor } from './visitor';

// ==============================
// MONUMENTS 
// ==============================

export interface Monument {
    name: string;
    accept(visitor: Visitor): string;
}

export const monument: (name: string) => Monument = function (name: string): Monument {
    return {
        name: name,
        accept(visitor) {
            return visitor.visit(this);
        }
    }
};
