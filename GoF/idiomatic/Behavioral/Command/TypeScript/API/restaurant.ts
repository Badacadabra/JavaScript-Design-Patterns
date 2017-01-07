import { Order } from './order';

// ==============================
// RESTAURANT
// ==============================

export interface Restaurant {
    orders: Order[];
    addOrder(order: Order): void;
    prepareOrders(): string;
}

export const restaurant: Restaurant = {
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
