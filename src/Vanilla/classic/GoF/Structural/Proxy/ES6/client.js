import BankAccount from './API/BankAccount';
import ATM from './API/ATM';

// ==============================
// CLIENT CODE
// ==============================

let bankAccount = new BankAccount(),
    proxy = new ATM(bankAccount);

try {
    console.log(proxy.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(`${e.type} - ${e.message}`); // AuthenticationException - Invalid code
} finally {
    console.log(proxy.withdrawMoney(1337)); // Enjoy the cash! 
}
