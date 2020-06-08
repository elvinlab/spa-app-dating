export class Promotion {
    constructor(
        public id: number,
        public commerce_id: string,
        public coupon: string,
        public max: number,
        public amount: number,
        public expiry: string,
        public description: string,
        public image: string,
        public discount: number,
    ) { }
}
