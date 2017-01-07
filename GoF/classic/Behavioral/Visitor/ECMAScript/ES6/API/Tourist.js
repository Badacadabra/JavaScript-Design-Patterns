import Visitor from './Visitor';

// ==============================
// CONCRETE VISITOR 
// ==============================

export default class Tourist extends Visitor {
    visit(monument) {
        return `Visiting ${monument.constructor.name}`;
    }
}
