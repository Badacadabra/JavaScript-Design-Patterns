// ==============================
// ABSTRACT ORDER
// ==============================

class Order {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    deliver() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE ORDER
// ==============================

class TexMex extends Order {
    constructor(customer) {
        super();
        this._customer = customer;
    }

    deliver() {
        return this._customer.pay();
    }
}

// ==============================
// CONCRETE RESTAURANT
// ==============================

class Restaurant {
    constructor() {
        this._orders = [];
    }

    addOrder(order) {
        this._orders.push(order);
    }

    prepareOrders() {
        let summary = "";
        for (let order of this._orders) {
            summary += order.deliver();
        }
        return summary;
    }
}

// ==============================
// CONCRETE CUSTOMER
// ==============================

class Customer {
    pay() {
        return "Payment OK!\n";
    }
}

// ==============================
// CLIENT CODE
// ==============================

let customer = new Customer(),
    order = new TexMex(customer),
    restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
