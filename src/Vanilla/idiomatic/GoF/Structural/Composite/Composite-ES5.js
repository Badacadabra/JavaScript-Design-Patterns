'use strict';

// ==============================
// SIMPLE COMPONENT
// ==============================

// A ball does not contain anything
var createBall = function () { 
    return {
        description: function () {
            return "There's a ball!\n";
        }
    }
};

// ==============================
// COMPOSITE COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes
var createToyBox = function () {
    return {
        toys: [],
        description: function () {
            return "There's a toy box!\n";
        },
        add: function (toy) {
            this.toys.push(toy); 
        },
        inventory: function () {
            var inventory = "Let's open the toy box...\n";
            for (var i = 0; i < this.toys.length; i++) {
                inventory += this.toys[i].description();
                if (this.toys[i].hasOwnProperty("toys")) {
                    inventory += this.toys[i].inventory();
                }
            }
            return inventory;
        }
    }
};

// ==============================
// TEST 
// ==============================

// Here we organize our toys in an optimal way
var ball1 = createBall(),
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
