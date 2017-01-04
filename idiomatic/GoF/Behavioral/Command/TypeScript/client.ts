import { texMex } from './API/order';
import { restaurant } from './API/restaurant';
import { customer } from './API/customer';

// ==============================
// CLIENT CODE 
// ==============================

texMex.customer = customer;
restaurant.addOrder(texMex);

console.log(restaurant.prepareOrders());
