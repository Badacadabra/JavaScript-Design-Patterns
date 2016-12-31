'use strict';

// ==============================
// MONUMENTS 
// ==============================

var monument = function (name) {
    return {
        name: name,
        accept: function (visitor) {
            return visitor.visit(this);
        }
    }
};

// ==============================
// VISITOR 
// ==============================

var tourist = {
    visit: function (monument) {
        return "Visiting " + monument.name;
    }
};

// ==============================
// TEST 
// ==============================

var castle = monument('Castle'),
    abbey = monument('Abbey');

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
