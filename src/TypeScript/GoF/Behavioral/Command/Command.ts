// ==============================
// ABSTRACT ORDER
// ==============================

interface Order {
    deliver(): string;
}

// ==============================
// CONCRETE ORDER
// ==============================

class TexMex implements Order {
    private customer: Customer;

    constructor(customer: Customer) {
        this.customer = customer;
    }

    public deliver(): string {
        return this.customer.pay();
    }
}

// ==============================
// CONCRETE RESTAURANT
// ==============================

class Restaurant {
    private orders: Order[] = [];

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    prepareOrders(): string {
        let summary: string = "";
        for (let order of this.orders) {
            summary += order.deliver();
        }
        return summary;
    }
}

// ==============================
// CONCRETE CUSTOMER
// ==============================

class Customer {
    pay(): string {
        return "Payment OK!\n";
    }
}

// ==============================
// CLIENT CODE
// ==============================

let customer: Customer = new Customer(),
    order: Order = new TexMex(customer),
    restaurant: Restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
