import Sauce from './Sauce';

// ==============================
// CONCRETE SAUCE
// ==============================

export default class Pesto extends Sauce {
    ingredients() {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)"; 
    }
}
