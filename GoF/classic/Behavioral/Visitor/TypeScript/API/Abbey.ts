import HistoricalMonument from './HistoricalMonument';
import Visitor from './Visitor';

// ==============================
// CONCRETE MONUMENT
// ==============================

export default class Abbey implements HistoricalMonument {
    public accept(visitor: Visitor): string {
        return visitor.visit(this);
    }
}
