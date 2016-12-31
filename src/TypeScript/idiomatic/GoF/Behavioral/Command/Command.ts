// ==============================
// CUSTOMER
// ==============================

interface Customer {
    pay(): string;
}

const customer: Customer = {
    pay() {
        return "Payment OK!\n";
    }
};

// ==============================
// ORDER
// ==============================

interface Order {
    customer?: Customer;
    deliver(): string;
}

const texMex: Order = {
    deliver() {
        return this.customer.pay(); 
    }
};

// ==============================
// RESTAURANT
// ==============================

interface Restaurant {
    orders: Order[];
    addOrder(order: Order): void;
    prepareOrders(): string;
}

const restaurant: Restaurant = {
    orders: [],
    addOrder(order) {
        this.orders.push(order); 
    },
    prepareOrders() {
        let summary = "";
        for (let order of this.orders) {
            summary += order.deliver();
        }
        return summary;
    }
};

// ==============================
// TEST 
// ==============================

texMex.customer = customer;
restaurant.addOrder(texMex);

console.log(restaurant.prepareOrders());
