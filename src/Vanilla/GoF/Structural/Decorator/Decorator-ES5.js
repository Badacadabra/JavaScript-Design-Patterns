'use strict';

// ==============================
// ABSTRACT PIZZA
// ==============================

var Pizza = (function () {
    function Pizza() {
        if (this.constructor === Pizza) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Pizza.prototype.ingredients = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Pizza;
})();

// ==============================
// CONCRETE PIZZA
// ==============================

var Margherita = (function () {
    function Margherita() {}
    Margherita.prototype = Object.create(Pizza.prototype);
    Margherita.prototype.constructor = Margherita;

    Margherita.prototype.ingredients = function () {
        return "- Tomatoes\n- Mozzarella\n";
    };

    return Margherita;
})();

// ==============================
// ABSTRACT DECORATOR
// ==============================

var CustomPizza = (function () {
    function CustomPizza(pizza) {
        if (this.constructor === CustomPizza) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._pizza = pizza;
    }
    CustomPizza.prototype = Object.create(Pizza.prototype);
    CustomPizza.prototype.constructor = CustomPizza;

    CustomPizza.prototype.ingredients = function () {
        return this._pizza.ingredients();
    };

    return CustomPizza;
})();

// ==============================
// CONCRETE DECORATORS (INGREDIENTS)
// ==============================

var Bacon = (function () {
    function Bacon(pizza) {
        CustomPizza.call(this, pizza);
    }
    Bacon.prototype = Object.create(CustomPizza.prototype);
    Bacon.prototype.constructor = Bacon;

    Bacon.prototype.ingredients = function () {
        return this._pizza.ingredients() + "- Bacon\n";
    };

    return Bacon;
})();

var Peppers = (function () {
    function Peppers(pizza) {
        CustomPizza.call(this, pizza);
    }
    Peppers.prototype = Object.create(CustomPizza.prototype);
    Peppers.prototype.constructor = Peppers;

    Peppers.prototype.ingredients = function () {
        return this._pizza.ingredients() + "- Peppers\n";
    };

    return Peppers;
})();

// ==============================
// CLIENT CODE
// ==============================

console.log(new Peppers(new Bacon(new Margherita())).ingredients());
