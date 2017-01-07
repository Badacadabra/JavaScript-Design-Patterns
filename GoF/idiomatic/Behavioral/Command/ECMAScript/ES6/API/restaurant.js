// ==============================
// RESTAURANT
// ==============================

export default {
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
