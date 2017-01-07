import Customer from './API/Customer';
import TexMex from './API/TexMex';
import Restaurant from './API/Restaurant';

// ==============================
// CLIENT CODE
// ==============================

let customer = new Customer(),
    order = new TexMex(customer),
    restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
