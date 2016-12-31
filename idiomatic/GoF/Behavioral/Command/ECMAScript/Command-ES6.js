// ==============================
// ORDER
// ==============================

const texMex = {
    deliver() {
        return this.customer.pay(); 
    }
};

// ==============================
// RESTAURANT
// ==============================

const restaurant = {
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
// CUSTOMER
// ==============================

const customer = {
    pay() {
        return "Payment OK!\n";
    }
};

// ==============================
// TEST 
// ==============================

texMex.customer = customer;
restaurant.addOrder(texMex);

console.log(restaurant.prepareOrders());
