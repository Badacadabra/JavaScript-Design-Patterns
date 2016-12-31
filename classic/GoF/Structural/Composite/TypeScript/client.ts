import Ball from './API/Ball';
import ToyBox from './API/ToyBox';

// ==============================
// CLIENT CODE
// ==============================

// Here we organize our toys in an optimal way
let ball1: Ball = new Ball(),
    ball2: Ball = new Ball(),
    ball3: Ball = new Ball(),
    bigToyBox: ToyBox = new ToyBox(),
    smallToyBox: ToyBox = new ToyBox();

smallToyBox.add(ball1);
smallToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
