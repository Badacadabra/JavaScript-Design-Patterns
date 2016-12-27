import Visitor from './Visitor';
import HistoricalMonument from './HistoricalMonument';

// ==============================
// CONCRETE VISITOR 
// ==============================

// Necessary declaration in TypeScript to access a class name (see the "visit" method)
interface Function {
    name: string;
}

export default class Tourist implements Visitor {
    public visit(monument: HistoricalMonument): string {
        return `Visiting ${monument.constructor.name}`;
    }
}
