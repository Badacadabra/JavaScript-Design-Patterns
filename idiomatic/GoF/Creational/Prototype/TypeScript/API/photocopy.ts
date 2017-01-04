// ==============================
// PROTOTYPE
// ==============================

export interface PaperSheet {
    price: number;
    currency: string;
}

export const photocopy: (invoice: PaperSheet) => PaperSheet =
    function (invoice: PaperSheet): PaperSheet {
        return Object.assign(Object.create(Object.getPrototypeOf(invoice)), invoice);
    };
