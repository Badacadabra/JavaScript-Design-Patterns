import HistoricalMonument from './HistoricalMonument';

// ==============================
// CONCRETE MONUMENT
// ==============================

export default class Castle extends HistoricalMonument {
    accept(visitor) {
        return visitor.visit(this);
    }
}
