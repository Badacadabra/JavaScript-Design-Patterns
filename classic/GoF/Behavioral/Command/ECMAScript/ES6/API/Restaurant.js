// ==============================
// CONCRETE RESTAURANT
// ==============================

export default class Restaurant {
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
