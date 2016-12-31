import Harry from './API/Harry';
import Tom from './API/Tom';
import Dick from './API/Dick';

// ==============================
// CLIENT CODE
// ==============================

let harry = new Harry(),
    tom = new Tom(harry),
    dick = new Dick(harry),
    conversation = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
