// ==============================
// PROTOTYPE
// ==============================

export default invoice => Object.assign(Object.create(Object.getPrototypeOf(invoice)), invoice);
