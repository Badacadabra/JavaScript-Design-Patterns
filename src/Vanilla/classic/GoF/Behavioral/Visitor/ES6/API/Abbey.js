import HistoricalMonument from './HistoricalMonument';

// ==============================
// CONCRETE MONUMENT
// ==============================

export default class Abbey extends HistoricalMonument {
    accept(visitor) {
        return visitor.visit(this);
    }
}
