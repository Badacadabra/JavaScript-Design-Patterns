// ==============================
// ABSTRACT ITERATOR 
// ==============================

export default interface Catalog {
    hasNext(): boolean; 
    next(): string;
}
