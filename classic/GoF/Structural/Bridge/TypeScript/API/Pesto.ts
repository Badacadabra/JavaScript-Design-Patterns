import Sauce from './Sauce';

// ==============================
// CONCRETE SAUCE
// ==============================

export default class Pesto implements Sauce {
    public ingredients(): string {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
}
