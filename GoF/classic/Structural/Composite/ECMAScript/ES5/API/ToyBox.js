'use strict';

var Toy = require('./Toy');

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes
var ToyBox = function () {
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

module.exports = ToyBox;
