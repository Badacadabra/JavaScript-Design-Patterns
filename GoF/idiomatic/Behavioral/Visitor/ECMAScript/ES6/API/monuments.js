// ==============================
// MONUMENTS 
// ==============================

export default name => {
    return {
        name: name,
        accept(visitor) {
            return visitor.visit(this);
        }
    }
};
