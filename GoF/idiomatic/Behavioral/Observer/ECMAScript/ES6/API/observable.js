// ==============================
// OBSERVABLE (GAZELLE)
// ==============================

export default {
    predators: [],
    addPredator(predator) {
        this.predators.push(predator); 
    },
    notifyPredators() {
        let situation = "";
        for (let predator of this.predators) {
            situation += predator.attack(); 
        }
        return situation;
    }
};
