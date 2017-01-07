import House from './API/House.js';
import Building from './API/Building';

// ==============================
// CLIENT CODE
// ==============================

let house = new House(),
    building = new Building();

console.log(house.build());
console.log(building.build());
