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

module.exports = {
    ball: createBall,
    box: createToyBox
};
