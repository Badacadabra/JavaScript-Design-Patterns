import HistoricalMonument from './HistoricalMonument';
import Visitor from './Visitor';

// ==============================
// CONCRETE MONUMENT
// ==============================

export default class Castle implements HistoricalMonument {
    public accept(visitor: Visitor): string {
        return visitor.visit(this);
    }
}
