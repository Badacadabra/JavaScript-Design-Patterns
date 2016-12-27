import HistoricalMonument from './HistoricalMonument';

// ==============================
// ABSTRACT VISITOR
// ==============================

export default interface Visitor {
    visit(monument: HistoricalMonument): string;
}
