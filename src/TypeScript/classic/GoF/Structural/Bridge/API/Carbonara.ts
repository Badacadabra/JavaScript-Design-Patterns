import Sauce from './Sauce';

// ==============================
// CONCRETE SAUCE
// ==============================

export default class Carbonara implements Sauce {
    public ingredients(): string {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
}
