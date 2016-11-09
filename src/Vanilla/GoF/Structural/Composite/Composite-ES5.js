'use strict';

// ==============================
// ABSTRACT COMPONENT
// ==============================

var Toy = (function () {
    function Toy() {
        if (this.constructor === Toy) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Toy.prototype.description = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Toy;
})();

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
var Ball = (function () {
    function Ball() {}
    Ball.prototype = Object.create(Toy.prototype);
    Ball.prototype.constructor = Ball;

    Ball.prototype.description = function () {
        return "There's a ball!\n";
    };

    return Ball;
})();

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes
var ToyBox = (function () {
    function ToyBox() {
        this.toys = [];
    }
    ToyBox.prototype = Object.create(Toy.prototype);
    ToyBox.prototype.constructor = ToyBox;

    ToyBox.prototype.description = function () {
        return "There's a toy box!\n";
    };

    ToyBox.prototype.add = function (toy) {
        this.toys.push(toy);
    };

    ToyBox.prototype.inventory = function () {
        var inventory = "Let's open the toy box...\n";
        for (var i = 0; i < this.toys.length; i++) {
            inventory += this.toys[i].description();
            if (this.toys[i] instanceof ToyBox) {
                inventory += this.toys[i].inventory();
            }
        }
        return inventory;
    };

    return ToyBox;
})();

// ==============================
// CLIENT CODE
// ==============================

// Here we organize our toys in an optimal way
var ball1 = new Ball(),
    ball2 = new Ball(),
    ball3 = new Ball(),
    bigToyBox = new ToyBox(),
    smallToyBox = new ToyBox();

smallToyBox.add(ball1);
bigToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
