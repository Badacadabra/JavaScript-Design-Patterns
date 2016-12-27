import Visitor from './Visitor';

// ==============================
// ABSTRACT MONUMENT 
// ==============================

export default interface HistoricalMonument {
    accept(visitor: Visitor): string;
}
