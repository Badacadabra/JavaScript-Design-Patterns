import Home from './API/Home';
import House from './API/House';
import Building from './API/Building';

// ==============================
// CLIENT CODE
// ==============================

let house: Home = new House(),
    building: Home = new Building();

console.log(house.build());
console.log(building.build());
