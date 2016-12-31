import Customer from './API/Customer';
import Order from './API/Order';
import TexMex from './API/TexMex';
import Restaurant from './API/Restaurant';

// ==============================
// CLIENT CODE
// ==============================

let customer: Customer = new Customer(),
    order: Order = new TexMex(customer),
    restaurant: Restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
