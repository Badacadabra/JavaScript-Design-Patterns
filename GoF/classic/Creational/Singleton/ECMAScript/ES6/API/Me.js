// ==============================
// SINGLETON: "ME"
// ==============================

// We use an IIFE (Immediately-Invoked Function Expression) for encapsulation.
export default (() => {

    class Me {
        // Here the constructor is private (closure)
        constructor() {
            this.firstName = "Baptiste";
            this.lastName = "Vannesson";
        }
        
        // Static method to get the unique instance of 'Me'
        static getInstance() {
            if (!Me.instance) {
                // Static attribute which holds the unique instance of 'Me'
                Me.instance = new Me();
            }
            return Me.instance;
        }
    }

    // This is the only visible part from the outside
    return {
        getInstance() {
            return Me.getInstance();
        }
    };

})();
