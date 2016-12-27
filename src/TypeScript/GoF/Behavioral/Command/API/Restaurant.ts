import Order from './Order';

// ==============================
// CONCRETE RESTAURANT
// ==============================

export default class Restaurant {
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
