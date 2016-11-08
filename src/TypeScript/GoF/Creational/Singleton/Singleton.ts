// ==============================
// SINGLETON: "ME"
// ==============================

class Me {
    private static instance: Me;

    private constructor(private firstName: string, private lastName: string) {}
    
    public static getInstance(): Me {
        if (!Me.instance) {
            Me.instance = new Me("Baptiste", "Vannesson");
        }
        return Me.instance;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let me: Me = Me.getInstance(),
    meAgain: Me = Me.getInstance();

// It will display 'OK' since 'me' and 'meAgain' are references to the same object.
// Only one instance exists in the code. This is what we expect from a Singleton. :)
if (me === meAgain) {
    console.log("OK");
} else {
    console.log("KO");
}
