import Tom from './API/Tom';
import Dick from './API/Dick';
import Harry from './API/Harry';

// ==============================
// CLIENT CODE
// ==============================

let harry: Harry = new Harry(),
    tom: Tom = new Tom(harry),
    dick: Dick = new Dick(harry),
    conversation: string = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
