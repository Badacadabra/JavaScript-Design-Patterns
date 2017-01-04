import { createBall, createToyBox } from './API/toys';

// ==============================
// CLIENT CODE 
// ==============================

// Here we organize our toys in an optimal way
let ball1 = createBall(),
    ball2 = createBall(),
    ball3 = createBall(),
    bigToyBox = createToyBox(),
    smallToyBox = createToyBox();

smallToyBox.add(ball1);
bigToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
