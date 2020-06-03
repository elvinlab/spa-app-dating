export class Sale {
    constructor(
        public id: number,
        public commerce_id: string,
        public service_id: string,
        public amount: number,
        public iva: number,
    ) { }
}
