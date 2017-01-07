'use strict';

// ==============================
// PIZZA
// ==============================

var margherita = {
    ingredients: function () {
        return "- Tomatoes\n- Mozzarella\n";
    }
};

// ==============================
// DECORATORS (INGREDIENTS)
// ==============================

var addBacon = function (pizza) {
    return {
        ingredients: function () {
            return pizza.ingredients() + "- Bacon\n";
        }
    }
};

var addPeppers = function (pizza) {
    return {
        ingredients: function () {
            return pizza.ingredients() + "- Peppers\n";
        }
    }
};

module.exports = {
    margherita: margherita,
    bacon: addBacon,
    peppers: addPeppers
};
