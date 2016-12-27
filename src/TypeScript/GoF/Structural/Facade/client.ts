import HowToFeedAnimals from './API/HowToFeedAnimals';

// ==============================
// CLIENT CODE
// ==============================

let facade: HowToFeedAnimals = new HowToFeedAnimals();

console.log(facade.feedAnimals());
