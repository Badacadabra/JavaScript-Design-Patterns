// ==============================
// SINGLETON: "ME"
// ==============================

export default class Me {
    private static instance: Me;

    private constructor(private firstName: string, private lastName: string) {}
    
    public static getInstance(): Me {
        if (!Me.instance) {
            Me.instance = new Me("Baptiste", "Vannesson");
        }
        return Me.instance;
    }
}
